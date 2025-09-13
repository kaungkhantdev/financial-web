import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Header from '../layouts/Header';
import { Button } from '../ui/button';
import { ChartLineMultiple } from './ChartLineMultiple';
import { ChartRadialStacked } from './ChartRadialStacked';
import { TransactionTable } from './TransactionTable';
import data from '@/utils/data.json'

export default function FinanceDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Wallet', 'Analytics', 'Transaction', 'Help', 'Settings', 'Report'];

  return (
    <div className="">
      {/* Header */}
      <Header />

      <div className="">
            {/* Main Content */}
            <div className="p-6">
                <div className="flex align-baseline justify-between flex-wrap">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-xl font-bold text-gray-900 mb-2">Good morning, Jaylon</h1>
                        <p className="text-gray-600 text-sm">This is your finance report</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="hidden lg:flex space-x-8 mb-8 border-b border-gray-200">
                        {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 px-1 text-sm font-medium ${
                            activeTab === tab
                                ? 'text-green-600 border-b-2 border-green-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {tab}
                        </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-4">
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {/* Balance Card */}
                                <div className="md:col-span-2 bg-white rounded-md border p-5 w-full">
                                    <div className="mb-6">
                                        <p className="text-gray-600 text-sm mb-2">My balance</p>
                                        <div className="flex items-center space-x-2">
                                            <h2 className="text-2xl font-bold text-gray-900">$83,172.64</h2>
                                            <span className="text-green-600 text-sm font-medium">+6.7%</span>
                                            <span className="text-gray-500 text-sm">month diff</span>
                                        </div>
                                        <div className="text-gray-600 text-sm mt-2">6549 7329 9821 2472</div>
                                    </div>

                                    <div className="flex space-x-4">
                                    <Button>Send Money</Button>
                                    <Button variant={'secondary'}>Request Money</Button>
                                    </div>
                                </div>

                                {/* Income and Expenses Cards */}
                                <div className="bg-white rounded-md border p-5 flex flex-col justify-end">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-green-600" />
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">Monthly income</p>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">$16,281.48</h3>
                                    <div className="flex items-center text-sm">
                                        <span className="text-green-600 font-medium">+9.8%</span>
                                        <span className="text-gray-500 ml-1">month diff</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-md border p-5 flex flex-col justify-end">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                        <TrendingDown className="w-5 h-5 text-red-600" />
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">Monthly expenses</p>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">$6,638.72</h3>
                                    <div className="flex items-center text-sm">
                                        <span className="text-red-600 font-medium">-8.6%</span>
                                        <span className="text-gray-500 ml-1">month diff</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Chart */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <ChartLineMultiple />
                            <ChartLineMultiple />
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="bg-white rounded-md border p-5 w-full h-full">
                        {/* All Expenses */}
                        <div>
                            <ChartRadialStacked />
                        </div>
                    </div>

                </div>

                {/* Transactions */}
                <div className="mt-4">
                    <TransactionTable data={data} />
                </div>

            </div>
      </div>
    </div>
  );
}