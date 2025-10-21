import { TrendingUp, TrendingDown, WalletIcon, ChartSpline, BellDot } from 'lucide-react';

const Wallet = () => {
  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
        <div>
            <div className='mb-4 flex justify-between items-center w-full'>
                <h1 className="text-lg mb-2">Wallets</h1>
                <div className='space-x-4 text-gray-500'>
                    <ChartSpline className='w-4 h-4 text-gray-500 inline-block' />
                    <BellDot className='w-4 h-4 text-gray-500 inline-block' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4].map((obj) => (
                <div key={obj} className="rounded-3xl bg-white p-2 w-full">
                    <div className="rounded-2xl bg-yellow-200 p-6">
                        <div className="">
                            <div className='flex gap-2'>
                                <WalletIcon className='w-4 h-4' strokeWidth={2} />
                                <p className="text-sm font-medium mb-2">K Bank</p>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">your balance</p>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">$83,172.64</h2>

                            <div className="text-gray-600 text-sm mt-2">
                                <span className="text-green-600 text-sm font-medium">+6.7%</span> increase from last month
                            </div>
                        </div>

                    </div>
                    <div className='flex w-full justify-between px-5 py-2'>
                        {/* Income and Expenses Cards */}
                        <div className="flex flex-col justify-end">
                            
                            <div className="flex items-center text-sm rounded-full w-max mb-2">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white  mb-1">$16,281.48</h3>
                            <span className='text-xs'>Income October 2025</span>
                        </div>
                        <div className="border-r"></div>
                        <div className="flex flex-col justify-end">
                            <div className="flex items-center text-sm rounded-full w-max mb-2">
                                <TrendingDown className="w-4 h-4 text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">$16,281.48</h3>
                            <span className='text-xs'>Expenses October 2025</span>
                        </div>
                    </div>

                </div>
            ))}
            </div>
        </div>
    </div>
    
  );
}

export default Wallet

