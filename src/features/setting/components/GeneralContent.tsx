import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const GeneralContent = () => {
  return (
    <div className="w-full">
        <div className="pb-2 border-b border-gray-100 dark:border-gray-900">
            <h2 className="">Basics</h2>
        </div>
        
        {/* Photo */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Photo</span>
            </div>
            <div className="col-span-2 lg:col-span-3">
                <img 
                    src="https://github.com/shadcn.png"
                    alt="Profile" 
                    className="w-11 h-11 rounded-lg object-cover"
                />
            </div>
            <div className="col-span-1 text-end">
            <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>
        
        {/* Name */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Name</span>
            </div>
            <div className="col-span-2 lg:col-span-3">
                <span className="text-sm">Sophie Chamberlain</span>
            </div>
            <div className="col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>

        {/* Email Address */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Email Address</span>
            </div>
            <div className="col-span-2 lg:col-span-3 overflow-hidden">
                <span className="text-sm text-wrap">hi@sophiehamberlain.com</span>
            </div>
            <div className="col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Edit</Button>
            </div>
        </div>

        {/* Linked team account */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Linked team account</span>
                <br />
                <span className="text-sm text-muted-foreground">
                    Easily switch between <br className="lg:hidden" /> them and access <br /> both accounts from any device.
                </span>
            </div>
            <div className="col-span-1 lg:col-span-3">
               <img 
                    src="https://github.com/shadcn.png"
                    alt="Profile" 
                    className="w-11 h-11 rounded-full object-cover"
                />
            </div>
            <div className="col-span-2 lg:col-span-1 text-end">
                <Button variant={'outline'} size={'sm'}>Manage Team</Button>
            </div>
        </div>

        <div className="pb-2 pt-6 border-b border-gray-100 dark:border-gray-900">
            <h2 className="">Preferences</h2>
        </div>
        
        {/* Automatic */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Automatic Time</span>
            </div>
            <div className="col-span-2 lg:col-span-3">
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">GMT +07:00</Label>
                </div>
            </div>
        </div>

        {/* Language */}
        <div className="grid grid-cols-6 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className="col-span-3 lg:col-span-2">
                <span className="text-sm font-medium">Language</span>
                <br />
                <span className="text-sm text-muted-foreground">
                   Default language for dashboard
                </span>
            </div>
            <div className="col-span-2 lg:col-span-3">
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

export default GeneralContent
