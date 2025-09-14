import { TrendingUp, TrendingDown, Wallet2Icon } from 'lucide-react';

const Wallet = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1,2,3,4,5].map((obj) => (
            <div key={obj} className="rounded-md border p-5 w-full">
                {/* Balance Card */}
                <div className="">
                    <div className="">
                        <h1 className='flex gap-2 mb-4'>
                            <Wallet2Icon />
                            <span>K Bank</span>
                        </h1>
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">$83,172.64</h2>
                            <span className="text-green-600 text-sm font-medium">+6.7%</span>
                            <span className="text-gray-500 text-sm">month diff</span>
                        </div>
                        <div className="text-gray-600 text-sm mt-2">6549 7329 9821 2472</div>
                    </div>

                </div>
                
                <hr className='my-6' />

                {/* Income and Expenses Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="flex flex-col justify-end border-e">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 dark:bg-green-950 bg-green-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">Monthly income</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">$16,281.48</h3>
                        <div className="flex items-center text-sm">
                            <span className="text-green-600 font-medium">+9.8%</span>
                            <span className="text-gray-500 ml-1">month diff</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 dark:bg-red-950 bg-red-100 rounded-lg flex items-center justify-center">
                            <TrendingDown className="w-5 h-5 text-red-600" />
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">Monthly expenses</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">$6,638.72</h3>
                        <div className="flex items-center text-sm">
                            <span className="text-red-600 font-medium">-8.6%</span>
                            <span className="text-gray-500 ml-1">month diff</span>
                        </div>
                    </div>
                </div>

            </div>
        ))}
    </div>
  );
}

export default Wallet