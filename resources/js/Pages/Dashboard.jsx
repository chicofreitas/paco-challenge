import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { useState } from 'react';

export default function Dashboard(props) {

    const {conversion, setConversion} = useState(
        {
            'base': 'USD',
            'rates': {'BRL' : 5.19},
            'value': 1.00,
            'conversion' : 5.19
        }
    );

    //https://api.exchangeratesapi.io/v1/latest?access_key=API_KEY&base=USD&symbols=GBP,JPY,EUR
    //tfgbjh4H9FXKxWZbd7RPgjHrEz4aBBmr
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
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

                            <input type="text" name="from" placeholder="R$1.00" className='w-full'/>

                            <select name="from_select" id="">
                            <option value="BRL"  >Real Brasileiro (BRL)</option>
                                <option value="CAD">Dólar Canadense (CAD)</option>
                                <option value="USD" selected>Dólar Americano (USD)</option>
                            </select>

                        </div>

                        <div className='flex flex-row'>
                            <input type="text" name="to" placeholder='USD5.19'className='w-full'/>
                            <select name="to_select" id="">
                                <option value="BRL" selected >Real Brasileiro (BRL)</option>
                                <option value="CAD">Dólar Canadense (CAD)</option>
                                <option value="USD" >Dólar Americano (USD)</option>
                            </select>
                        </div>
                    </form>

                    <div className='py-10 mt-10 bg-white px-5'>
                        <header>
                            <h1 className='text-gray-600 font-bold text-5xl'>Histórico</h1>
                            <table  className='text-center'>
                                <thead>
                                    <tr>
                                        <th className='px-4'>Converter</th>
                                        <th className='px-4'>Para</th>
                                        <th className='px-4'>Base</th>
                                        <th className='px-4'>Concersão</th>
                                        <th className='px-4'>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>USD</td>
                                        <td>BRL</td>
                                        <td>1.00</td>
                                        <td>5.19</td>
                                        <td>2022-12-26</td>
                                    </tr>
                                </tbody>
                            </table>
                        </header>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
