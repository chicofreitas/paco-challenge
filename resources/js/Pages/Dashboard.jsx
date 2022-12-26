import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { useEffect, useState } from 'react';

export default function Dashboard({auth, errors, histories}) {

    const [logs, setLogs] = useState(histories);
    const [base, setbase] = useState('USD');
    const [target, setTarget] = useState('BRL');
    const [currencies, setCurrencies] = useState(['USD', 'BRL']);

    const convertionList = logs.map( (log) => {
        return (
            <tr key={log.id}>
                <td>{log.from}</td>
                <td>{log.to}</td>
                <td>{log.from_price}</td>
                <td>{log.to_price}</td>
                <td>{log.cotation}</td>
                <td>{log.created_at}</td>
            </tr>
        )
    });

    const onChangeBase = (e) => {
        setCurrencies(
            [ e.target.value, currencies[1] ]
        );
        console.log(e.target.value);
        const api = "https://api.exchangeratesapi.io/v1/latest?access_key=tfgbjh4H9FXKxWZbd7RPgjHrEz4aBBmr&base=${e.target.value}&symbols=GBP,JPY,EUR";
    }

    const onChangeTarget = (e) => {
        setCurrencies(
            [ currencies[0], e.target.value ]
            );
        console.log(e.target.value);
    }

    //https://api.exchangeratesapi.io/v1/latest?access_key=API_KEY&base=USD&symbols=GBP,JPY,EUR
    //tfgbjh4H9FXKxWZbd7RPgjHrEz4aBBmr
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

                            <input type="number" name="from" placeholder="R$1.00" className='w-full'/>

                            <select name="from_select" id="" defaultValue={'BRL'} onChange={e => onChangeBase(e)}>
                                <option value="BRL" >Real Brasileiro (BRL)</option>
                                <option value="CAD">Dólar Canadense (CAD)</option>
                                <option value="USD" >Dólar Americano (USD)</option>
                            </select>

                        </div>

                        <div className='flex flex-row'>
                            <input type="number" name="to" placeholder='USD5.19'className='w-full'/>
                            <select name="to_select" id="" defaultValue={'USD'} onChange={e => onChangeTarget(e)}>
                                <option value="BRL">Real Brasileiro (BRL)</option>
                                <option value="CAD">Dólar Canadense (CAD)</option>
                                <option value="USD" >Dólar Americano (USD)</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className='py-10 mt-10 bg-white px-20'>
                        <header>
                            <h1 className='text-gray-600 font-bold text-5xl'>Histórico</h1>
                            <table  className='text-center'>
                                <thead>
                                    <tr>
                                        <th className='px-4'>Converter</th>
                                        <th className='px-4'>Para</th>
                                        <th className='px-4'>Base</th>
                                        <th className='px-4'>Conversão</th>
                                        <th className='px-4'>Cotação</th>
                                        <th className='px-4'>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {convertionList}
                                </tbody>
                            </table>
                        </header>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}
