import { TrendingUp, TrendingDown, ChartNoAxesColumn } from 'lucide-react';

export const BalanceCard = () => (
  <div className="rounded-3xl p-2 w-full text-center bg-white">
    <div className="rounded-2xl bg-yellow-200 p-6">
      <p className="text-gray-600 text-sm font-bold mb-2">USD</p>
      <p className="text-gray-600 text-sm mb-2">your balance</p>
      <h2 className="text-4xl font-bold text-gray-900">$83,172.64</h2>
      <div className="text-gray-600 text-sm mt-2">+$421.03</div>
    </div>

    <div className="py-4 grid grid-cols-3">
      <div className="flex flex-col items-center">
        <TrendingUp className="w-4 h-4" />
        <p className="text-xs mt-2">Income</p>
      </div>
      <div className="flex flex-col items-center border-x">
        <ChartNoAxesColumn className="w-4 h-4" />
        <p className="text-xs mt-2">Transaction</p>
      </div>
      <div className="flex flex-col items-center">
        <TrendingDown className="w-4 h-4" />
        <p className="text-xs mt-2">Expense</p>
      </div>
    </div>
  </div>
);
