import { TrendingUp, TrendingDown, ChartNoAxesColumn } from 'lucide-react';

export const BalanceCard = () => (
  <div className="rounded-3xl p-2 w-full text-center bg-white dark:bg-card">
    <div className="rounded-2xl bg-yellow-200 dark:bg-sky-800 p-6">
      <p className="text-sm font-bold mb-2">USD</p>
      <p className="text-sm mb-2">your balance</p>
      <h2 className="text-4xl font-bold">$83,172.64</h2>
      <div className="text-sm mt-2">+$421.03</div>
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
