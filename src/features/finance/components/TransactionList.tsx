import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, TrendingUp } from 'lucide-react';

export default function TransactionList() {
  const transactions = [
    {
      id: 1,
      name: 'Henrik Jansen',
      type: 'Received',
      amount: '+$428.00',
      isPositive: true,
      avatar: '👨‍💼',
      bgColor: 'bg-amber-100'
    },
    {
      id: 2,
      name: 'Multiplex',
      type: 'Paid',
      amount: '-$124.55',
      isPositive: false,
      avatar: '🎬',
      bgColor: 'bg-black'
    },
    {
      id: 3,
      name: 'Eva Novak',
      type: 'Received',
      amount: '+$5,710.20',
      isPositive: true,
      avatar: '👩‍🦱',
      bgColor: 'bg-pink-100'
    },
    {
      id: 4,
      name: 'Binance',
      type: 'Received',
      amount: '+$1,714.29',
      isPositive: true,
      avatar: '₿',
      bgColor: 'bg-black'
    },
    {
      id: 5,
      name: 'Matteo Ricci',
      type: 'Received',
      amount: '+$536.00',
      isPositive: true,
      avatar: '👨‍🦱',
      bgColor: 'bg-red-100'
    },
    {
      id: 6,
      name: 'Nike',
      type: 'Paid',
      amount: '-$328.96',
      isPositive: false,
      avatar: '👟',
      bgColor: 'bg-black'
    }
  ];

  return (
    <div className="w-full">
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white rounded-2xl p-2 flex items-center justify-between"
          >
            {/* Left Section - Avatar and Info */}
            <div className="flex items-center gap-3 flex-1 ml-1">
              {/* Avatar */}
              <Avatar className="rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* Name and Type */}
              <div className="flex-1">
                <h3 className=" text-sm text-gray-900">{transaction.name}</h3>
                <div className="flex items-center gap-1">
                  <p className="text-[11px] text-gray-500">{transaction.type}</p>
                  <TrendingUp className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Right Section - Amount */}
            <div className='px-3'>
              <p
                className={` ${
                  transaction.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}