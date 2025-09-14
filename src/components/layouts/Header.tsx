import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";


const Header = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Wallet', 'Analytics', 'Transaction', 'Help', 'Settings', 'Report'];

  return (
      <header className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <a href="/">Personal Account</a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Dashboard</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
          </div>
          <div className="">
            <div className="flex items-center space-x-3">
              <Avatar className="rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="hidden lg:block text-sm">
                <div className="font-medium text-gray-900">Jaylon Baptiste</div>
                <div className="text-gray-500 text-xs">@jaylonbaptiste</div>
              </div>
            </div>
          </div>
        </div>

        {/* nav  */}
        <div className="flex align-baseline justify-between flex-wrap pt-10">
            {/* Welcome Section */}
            <div className="">
                <h1 className="text-xl font-bold text-gray-900 mb-2">Good morning, Jaylon</h1>
                <p className="text-gray-600 text-sm">This is your finance report</p>
            </div>

            {/* Tab Navigation */}
            <div className="hidden lg:flex space-x-8 border-b border-gray-200">
                {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-1 text-sm font-medium ${
                    activeTab === tab
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>
        </div>
      </header>
  )
}

export default Header