import { TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChartPieDonutText } from './ChartPieDonutText';

export const RightPanel = () => (
  <div className="p-6 lg:py-6 flex items-center justify-center bg-white w-full 2xl:min-h-screen rounded-3xl lg:rounded-none">
    <div>
      <ChartPieDonutText />
      <div className="flex space-x-6 justify-between mt-8 lg:mt-16">
        {/* Income */}
        <div className="flex flex-col justify-end">
          <div className="flex items-center mb-4">
            <span className="text-green-600 mr-2">+9.8%</span>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-xl font-bold">$16,281.48</h3>
          <span className="text-sm text-gray-500">Monthly income - month diff</span>
          <Button size="lg" className="rounded-full mt-4">
            Add Income
          </Button>
        </div>

        {/* Expense */}
        <div className="flex flex-col justify-end">
          <div className="flex items-center mb-4">
            <span className="text-red-600 mr-2">+9.8%</span>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-xl font-bold">$16,281.48</h3>
          <span className="text-sm text-gray-500">Monthly expense - month diff</span>
          <Button size="lg" variant="secondary" className="rounded-full mt-4">
            Add Expense
          </Button>
        </div>
      </div>
    </div>
  </div>
);
