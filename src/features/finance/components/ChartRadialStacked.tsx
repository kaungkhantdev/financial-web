import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]

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

const ChartRadialStacked = () => {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    <div>
      <div className="items-center pb-0">
        <div className="mb-6 flex items-center justify-center">
            <div className="py-1 px-4 rounded-full flex items-center justify-center bg-black dark:bg-green-950">
                <p className="text-sm text-white">K Bank *** 234</p>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
                <p className="text-xs text-gray-500 mb-1">Daily</p>
                <p className="font-semibold text-gray-900 dark:text-white">$682.20</p>
            </div>
            <div>
                <p className="text-xs text-gray-500 mb-1">Weekly</p>
                <p className="font-semibold text-gray-900 dark:text-white">$2,193.26</p>
            </div>
            <div>
                <p className="text-xs text-gray-500 mb-1">Monthly</p>
                <p className="font-semibold text-gray-900 dark:text-white">$6,638.72</p>
            </div>
        </div>

      </div>
      <div className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </div>
      <div className="flex-col gap-2 text-sm">
        {/* Category List */}
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Entertainments</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">46%</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Platform</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">56%</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-700">Shopping</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">48%</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Food & health</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">63%</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChartRadialStacked;
