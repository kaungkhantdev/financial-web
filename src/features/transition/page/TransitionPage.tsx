import data from '@/utils/data.json'
import { WalletHeader } from '@/features/wallet/components/WalletHeader';
import { TransactionTable } from '../components/TransactionTable';


const TransitionPage = () => {
  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
        <div className="2xl:min-w-7xl">
            <WalletHeader title='Transactions' />
            
            <div>
                <TransactionTable data={data} />
            </div>
        </div>
    </div>
  );
}

export default TransitionPage