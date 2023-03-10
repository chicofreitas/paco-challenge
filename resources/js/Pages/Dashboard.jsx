import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HistoryItems from '@/Components/HistoryItems';

export default function Dashboard({auth, errors, histories}) {

    const [rates, setRates] = useState([]);
    const [hist, setHist] = useState({from: 'USD', to : 'BRL', from_price : 1.00, to_price : 5.22, cotation : 5.22, created_at : '2022-12-26 00:00:00'});
    const [logs, setLogs] = useState(histories);

    useEffect( () => {
        getRates();
    }, []);

    const getRates = async () => {
        await axios.get(
            "http://localhost:8000/api/", 
            ).then( res => {
                setRates(res.data.rates);
            }).catch( err => {
                console.log(err);
            });
        }

    const save = async () => {
        await axios.post(
            "http://localhost:8000/api/", 
            {
                user_id : auth.user.id,    
                from: hist.from, 
                to : hist.to,
                from_price : hist.from_price, 
                to_price : hist.conv, 
                cotation : hist.cot,
            }).then( res => {
                hist.id = res.data.id;
                hist.created_at = res.data.created_at;
                setLogs([...logs, hist]);
            }).catch( err => {
                console.log(err);
            });
        }
    
    const convertTo = (value, from, to) => {
        const val = Number(value);
        const value1 = (from == undefined) ? hist.from : from;
        const value2 = (to == undefined) ? hist.to : to;
        const cot = ( rates[value2] / rates[value1] );
        const conv = cot*val;
        
        const history = {
            from: value1, 
            to : value2,    
            from_price : val, 
            to_price : conv.toFixed(2), 
            cotation : cot.toFixed(2), 
            created_at : '2022-12-26 00:00:00'
        }
        setHist(history);
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Painel de Controle</h2>}
        >
            <Head title="PACO: Conversor de Moedas" />

            <div className="py-12"> 
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Bem vindo ao Paco Conversor de Moedas</div>
                    </div>
                </div>

                <div className='container mx-auto px-96'>
                    <form method='post'>
                        <div className='py-4 flex flex-row'>

                            <input type="number" name="from" id="from" className='w-full' defaultValue="1.00" onChange={e => convertTo(e.target.value)}/>

                            <select name="from_select" id="from_select" defaultValue={'USD'} onChange={
                                    e => convertTo(Number(document.getElementById('from').value), e.target.value, hist.to)
                                }>
                                <option value="BRL" >Real Brasileiro (BRL)</option>
                                <option value="CAD">D??lar Canadense (CAD)</option>
                                <option value="USD" >D??lar Americano (USD)</option>
                            </select>

                        </div>

                        <div className='flex flex-row'>
                            <input type="number" name="to" id="to" className='w-full' placeholder={hist.to_price} />

                            <select name="to_select" id="to_select" defaultValue={'BRL'} onChange={
                                    e =>  convertTo(Number(document.getElementById('from').value), hist.from, e.target.value)
                                }>
                                <option value="BRL">Real Brasileiro (BRL)</option>
                                <option value="CAD">D??lar Canadense (CAD)</option>
                                <option value="USD" >D??lar Americano (USD)</option>
                            </select>
                        </div>
                    </form>

                    <button 
                        className="my-5 px-4 py-2 bg-green-600 border rounded-md text-white"
                        onClick={e => save()}>
                        Salvar convers??o
                    </button>

                </div>

                <div className='container mx-auto bg-white shadow-lg p-10'>
                    <header>
                        <h1 className='text-gray-600 font-bold text-center text-3xl'>Hist??rico</h1>
                        
                        <table className='table-auto'>
                            <thead>
                                <tr className='text-center'>
                                    <th className='px-4'>Converter</th>
                                    <th className='px-4'>Para</th>
                                    <th className='px-4'>Base</th>
                                    <th className='px-4'>Convers??o</th>
                                    <th className='px-4'>Cota????o</th>
                                    <th className='px-4'>Data</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <HistoryItems data={logs} />
                            </tbody>
                        </table>
                    </header>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
