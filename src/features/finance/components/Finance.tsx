import { TrendingUp, TrendingDown, ChartNoAxesColumn, Euro, ChartSpline, BellDot } from 'lucide-react';
// import ChartRadialStacked from './ChartRadialStacked';
import TransactionList from './TransactionList';
import { RateChart } from './RateChart';
import { Button } from '@/components/ui/button';
import { ChartPieDonutText } from './ChartPieDonutText';
import { Greeting } from '@/utils/helpers/greeting';

const Finance = () => {
  return (
    <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-8 lg:p-0">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-4 ">
               <div className='flex items-center justify-center w-full lg:min-h-screen'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
                    <div className='md:col-span-5 flex justify-between items-center'>
                        <h1 className="text-lg mb-2">{Greeting()}, Jaylon</h1>
                        <div className='space-x-4 text-gray-500'>
                            <ChartSpline className='w-4 h-4 text-gray-500 inline-block' />
                            <BellDot className='w-4 h-4 text-gray-500 inline-block' />
                        </div>
                    </div>
                    {/* Balance Card */}
                    <div className='md:col-span-2'>
                        
                        <div className="rounded-3xl p-2 w-full text-center bg-white">
                            <div className="rounded-2xl bg-yellow-200 p-6">
                                <p className="text-gray-600 text-sm font-bold mb-2">USD</p>
                                <p className="text-gray-600 text-sm mb-2">your balance</p>
                                <div className="">
                                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">$83,172.64</h2>
                                </div>
                                <div className="text-gray-600 text-sm mt-2">+$421.03</div>
                            </div>

                            <div className="py-4 grid grid-cols-3">
                                <div className='flex flex-col items-center'>
                                    <TrendingUp className="w-4 h-4" />
                                    <p className='text-xs mt-2'>Income</p>
                                </div>
                                <div className='flex flex-col items-center border-x'>
                                    <ChartNoAxesColumn className="w-4 h-4" />
                                    <p className='text-xs mt-2'>Transaction</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <TrendingDown className="w-4 h-4" />
                                    <p className='text-xs mt-2'>Expense</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 gap-2 mt-4'>
                            <div className="rounded-3xl bg-white p-2">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="mb-2 w-8 h-8 dark:bg-green-950 bg-green-100 rounded-full flex items-center justify-center">
                                        <Euro className="w-4 h-4 text-green-600" />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-gray-500 mb-1">Euro</p>
                                    <p className="">0.97</p>
                                </div>
                            </div>
                            <div className="rounded-3xl bg-white p-2">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="mb-2 w-8 h-8 dark:bg-green-950 bg-green-100 rounded-full flex items-center justify-center">
                                        <Euro className="w-4 h-4 text-green-600" />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-gray-500 mb-1">Euro</p>
                                    <p className="">0.97</p>
                                </div>
                            </div>
                            <div className="rounded-3xl bg-white p-2">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="mb-2 w-8 h-8 dark:bg-green-950 bg-green-100 rounded-full flex items-center justify-center">
                                        <Euro className="w-4 h-4 text-green-600" />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-gray-500 mb-1">Euro</p>
                                    <p className="">0.97</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="md:col-span-3">
                        <div className='flex justify-between mb-4 text-sm'>
                            <h3 className="">Recent Transactions</h3>
                            <h3 className="">View All</h3>
                        </div>
                        <div>
                            <TransactionList />
                        </div>
                    </div>


                    <div className="md:col-span-5 mt-">
                        <RateChart />
                    </div>
                </div>
               </div>
            </div>

            {/* Right Column */}
            <div className="py-5 lg:py-0 px-5 flex items-center justify-center bg-white w-full lg:min-h-screen rounded-3xl lg:rounded-none">
                <div>
                    {/* <ChartRadialStacked /> */}
                    <ChartPieDonutText />
                    {/* Statistics Chart */}
                    <div className='flex space-x-6 w-full justify-between mt-8 lg:mt-16'>
                        {/* Income and Expenses Cards */}
                        <div className="flex flex-col justify-end">
                            <div className="flex items-center mb-4">
                                <span className="text-green-600 mr-2">+9.8%</span>
                                <TrendingUp className="w-5 h-5 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">$16,281.48</h3>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 ml-1">Monthly income - month diff</span>
                            </div>
                            <Button size={'lg'} className='rounded-full mt-4'>Add Income</Button>
                        </div>

                        <div className="flex flex-col justify-end">
                            <div className="flex items-center mb-4">
                                <span className="text-red-600 mr-2">+9.8%</span>
                                <TrendingDown className="w-5 h-5 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">$16,281.48</h3>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 ml-1">Monthly expense - month diff</span>
                            </div>
                            <Button size={'lg'} className='rounded-full mt-4' variant={'secondary'}>Add Expense</Button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  );
}

export default Finance