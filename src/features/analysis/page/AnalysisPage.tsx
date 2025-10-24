import { ExchangeRateCards, GreetingHeader, RateChart, RightPanel } from "@/features/finance";
import { BalanceCard } from "@/features/finance/components/BalanceCard";
import ChartLineMultiple from "../components/ChartLineMultiple";

const AnalysisPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-8 lg:p-0">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="lg:py-6 flex items-center justify-center w-full 2xl:min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
              <GreetingHeader />

              {/* Balance & Exchange Rates */}
              <div className="md:col-span-2">
                <BalanceCard />
                <ExchangeRateCards />
              </div>

              {/* Recent Transactions */}
              <div className="md:col-span-3">
                <ChartLineMultiple />
              </div>

              {/* Rate Chart */}
              <div className="md:col-span-5">
                <RateChart />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <RightPanel />
      </div>
    </div>
  );
};

export default AnalysisPage;
