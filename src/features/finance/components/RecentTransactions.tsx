import { TransactionList } from './TransactionList';

export const RecentTransactions = () => (
  <div>
    <div className="flex justify-between mb-4 text-sm">
      <h3>Recent Transactions</h3>
      <h3 className="cursor-pointer text-blue-500">View All</h3>
    </div>
    <TransactionList />
  </div>
);
