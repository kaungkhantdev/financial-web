import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const ChartLineMultiple = () => {
  return (
    <div className="rounded-md border p-5 w-full">
      <div>
        <div>Statics</div>
        <div className="text-sm">January - June 2024</div>
      </div>
      <div>
        <ChartContainer 
          config={chartConfig}
          className="">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 12,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
      <div>
        <div className="flex w-full items-start gap-2 text-sm">
           <div className="mt-6">
              <div>
                  <p className="text-gray-600 text-sm mb-1">Average income</p>
                  <div className="flex items-center space-x-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">$10,389.49</h4>
                  <span className="text-green-600 text-sm">+9.8%</span>
                  <span className="text-gray-500 text-xs">compare to last month</span>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChartLineMultiple;