import { TrendingUp, TrendingDown, WalletIcon } from 'lucide-react';

interface WalletProps {
  wallet: {
    id: number;
    name: string;
    balance: number;
    income: number;
    expense: number;
    change: number;
  };
}

export const WalletCard = ({ wallet }: WalletProps) => {
  return (
    <div className="rounded-3xl bg-white p-2 w-full dark:bg-card">
      <div className="rounded-2xl bg-yellow-200 dark:bg-sky-800 p-6">
        <div className="">
          <div className="flex gap-2">
            <WalletIcon className="w-4 h-4" strokeWidth={2} />
            <p className="text-sm font-medium mb-2">{wallet.name}</p>
          </div>
          <p className="text-sm mb-2">your balance</p>
          <h2 className="text-4xl font-bold">
            ${wallet.balance.toLocaleString()}
          </h2>

          <div className="text-sm mt-2">
            <span
              className={`${
                wallet.change >= 0 ? 'text-green-600' : 'text-red-600'
              } text-sm font-medium`}
            >
              {wallet.change >= 0 ? '+' : ''}
              {wallet.change}%
            </span>{' '}
            {wallet.change >= 0 ? 'increase' : 'decrease'} from last month
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between px-5 py-2">
        {/* Income */}
        <div className="flex flex-col justify-end">
          <div className="flex items-center text-sm rounded-full w-max mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <h3 className="font-bold mb-1">
            ${wallet.income.toLocaleString()}
          </h3>
          <span className="text-xs">Income October 2025</span>
        </div>

        <div className="border-r"></div>

        {/* Expense */}
        <div className="flex flex-col justify-end">
          <div className="flex items-center text-sm rounded-full w-max mb-2">
            <TrendingDown className="w-4 h-4 text-red-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">
            ${wallet.expense.toLocaleString()}
          </h3>
          <span className="text-xs">Expenses October 2025</span>
        </div>
      </div>
    </div>
  );
};
