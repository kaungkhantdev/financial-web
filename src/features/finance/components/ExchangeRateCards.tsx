import { Euro } from 'lucide-react';

export const ExchangeRateCards = () => {
  const rates = [
    { currency: 'EUR', rate: '0.97' },
    { currency: 'JPY', rate: '149.32' },
    { currency: 'GBP', rate: '0.86' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {rates.map((item, index) => (
        <div key={index} className="rounded-3xl bg-white dark:bg-card p-2">
          <div className="flex items-center justify-between mb-4">
            <div className="mb-2 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <Euro className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="px-2">
            <p className="text-xs mb-1">{item.currency}</p>
            <p>{item.rate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
