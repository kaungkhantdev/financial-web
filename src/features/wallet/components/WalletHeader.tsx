import { ChartSpline, BellDot } from 'lucide-react';

export const WalletHeader = ({ title }:  { title?: string }) => (
  <div className="mb-4 flex justify-between items-center w-full">
    <h1 className="text-lg mb-2 font-medium ">{ title ?? 'Wallets'}</h1>
    <div className="space-x-4 text-gray-500">
      <ChartSpline className="w-4 h-4 inline-block" />
      <BellDot className="w-4 h-4 inline-block" />
    </div>
  </div>
);
