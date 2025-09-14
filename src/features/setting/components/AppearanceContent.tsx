import { useTheme } from "@/components/common/ThemeProvider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const AppearanceContent = () => {
   const { theme, setTheme } = useTheme()
  return (
    <div className="w-full">
        <div className="pb-2 border-b border-gray-100 dark:border-gray-900">
            <h2 className="">Appearance</h2>
        </div>
        
        {/* Theme color */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Theme Color</span>
                <br />
                <span className="text-sm text-muted-foreground">
                    Customize theme color in index.css
                </span>
            </div>
            <div className="col-span-3">
                <div className="flex items-center space-x-3">
                    {/* Color Circle */}
                    <div 
                        className="w-6 h-6 bg-primary rounded-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                        title="Click to copy color code"
                    />
                    
                    {/* Color Code Display */}
                    <div 
                        className="bg-muted border rounded-lg px-3 py-1.5 font-mono text-sm cursor-pointer transition-colors duration-200"
                        title="Click to copy color code"
                    >
                        <span className="text-gray-400">#</span>
                        <span className="font-medium">4e5fc7</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Device Theme */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Device Theme</span>
                <br />
                <span className="text-sm text-muted-foreground">
                    Change various mode
                </span>
            </div>
            <div className="col-span-3">
                <div className="flex items-center space-x-3">
                    <RadioGroup defaultValue={theme} className="flex flex-col lg:flex-row">
                        <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                            <RadioGroupItem
                                onClick={() => setTheme("light")} 
                                value="light" 
                                id="r1"
                                className="data-[state=checked]:border-primary"
                            />
                                <div>
                                    <h1 className="lg:mb-3">Light Mode</h1>
                                    <div className="hidden lg:block">
                                        <div className="space-y-2 rounded-lg bg-[#ecedef] p-2">
                                            <div className="space-y-2 rounded-md bg-white p-2 shadow-xs">
                                                <Skeleton className="h-2 w-[80px] rounded-lg bg-[#ecedef]"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-[#ecedef]"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-white p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-[#ecedef]"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-[#ecedef]"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-white p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-[#ecedef]"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-[#ecedef]"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </Label>
                        <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                            <RadioGroupItem
                                onClick={() => setTheme("dark")} 
                                value="dark" 
                                id="r2"
                                className="data-[state=checked]:border-primary"
                            />
                                <div>
                                    <h1 className="lg:mb-3">Dark Mode</h1>
                                    <div className="hidden lg:block">
                                        <div className="space-y-2 rounded-lg bg-gray-900 p-2">
                                            <div className="space-y-2 rounded-md bg-gray-800 p-2 shadow-xs">
                                                <Skeleton className="h-2 w-[80px] rounded-lg bg-gray-400"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-gray-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-gray-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-gray-400"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-gray-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-gray-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-gray-400"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-gray-400"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </Label>
                        <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                            <RadioGroupItem
                                onClick={() => setTheme("system")} 
                                value="system" 
                                id="r3"
                                className="data-[state=checked]:border-primary"
                            />
                                <div>
                                    <h1 className="lg:mb-3">System</h1>
                                    <div className="hidden lg:block">
                                        <div className="space-y-2 rounded-lg bg-blue-900 p-2">
                                            <div className="space-y-2 rounded-md bg-blue-800 p-2 shadow-xs">
                                                <Skeleton className="h-2 w-[80px] rounded-lg bg-blue-400"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-blue-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-blue-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-blue-400"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-blue-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-blue-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-blue-400"/>
                                                <Skeleton className="h-2 w-[100px] rounded-lg bg-blue-400"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </Label>
                    </RadioGroup>
                </div>
            </div>
        </div>

        {/* Language */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Language</span>
                <br />
                <span className="text-sm text-muted-foreground">
                   Default language
                </span>
            </div>
            <div className="col-span-3">
                <Select defaultValue="english_uk">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="english_uk">English UK</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    </div>
  )
}

export default AppearanceContent
