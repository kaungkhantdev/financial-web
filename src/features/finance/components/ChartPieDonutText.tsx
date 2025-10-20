"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

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
              className="mx-auto aspect-square w-full max-w-[260px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartData}
                      dataKey="visitors"
                      nameKey="browser"
                      innerRadius={80}
                      outerRadius={100}
                      strokeWidth={5}
                      cornerRadius={8} 
                      paddingAngle={3} 
                    >
                    <Label
                        content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                            <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                                >
                                {totalVisitors.toLocaleString()}
                                </tspan>
                                <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                                >
                                Visitors
                                </tspan>
                            </text>
                            )
                        }
                        }}
                    />
                    </Pie>
                </PieChart>
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
