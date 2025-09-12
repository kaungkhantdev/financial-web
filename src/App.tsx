import { ArrowDownRight, ArrowUpRight, ChartNoAxesCombined, HomeIcon, LandmarkIcon, Wallet2Icon } from 'lucide-react'
import './App.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChartRadialStacked } from './components/common/ChartRadialStacked'

function App() {

  return (
    <>
    <main className='max-w-7xl mx-auto lg:px-6 py-8'>
      <header className="bg-white">
          <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                      <LandmarkIcon size={30} strokeWidth={1.5}/>
                  </div>
              </div>
              
              <nav className="hidden lg:flex items-center space-x-20">
                  <a href="#" className="flex items-center space-x-2 text-gray-900 font-medium">
                      <HomeIcon size={20} strokeWidth={1.8} />
                      <span>Home</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-500">
                      <Wallet2Icon size={20} strokeWidth={1.8} />
                      <span>Cashflow</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-500">
                      <ChartNoAxesCombined size={20} strokeWidth={1.8} />
                      <span>Net Worth</span>
                  </a>
              </nav>
              
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
          </div>
      </header>

      <section className='mt-14'>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Summary</h1>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">2023</SelectItem>
              <SelectItem value="dark">2024</SelectItem>
              <SelectItem value="system">2025</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-white rounded-xl my-10">
            <div>
                <p className="text-left text-sm mb-1">Net Total</p>
                <div className="">
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-1">218.493,21€</h2>
                        <p className="text-red-500 text-sm">-1,3% from last year</p>
                    </div>
                    
                    <div>
                      {/* <ChartRadialStacked /> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-6 mb-10">
            <div className="bg-white rounded-xl">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-green-600 text-sm font-medium">Income</span>
                </div>
                <h3 className="text-left text-2xl font-bold text-gray-900 mb-2">135.780,47€</h3>
                <p className="text-green-500 text-sm flex items-center">
                    <ArrowUpRight size={20} strokeWidth={1.8} className='mr-1'/>
                    13% vs last year
                </p>
            </div>

            <div className="bg-white rounded-xl">
                <div className="flex items-center mb-4">
                    <span className="text-red-600 text-sm font-medium">Expenses</span>
                </div>
                <h3 className="text-left text-2xl font-bold text-gray-900 mb-2">87.600,34€</h3>
                <p className="text-green-500 text-sm flex items-center">
                    <ArrowUpRight size={20} strokeWidth={1.8} className='mr-1'/>
                    +4% vs last year
                </p>
            </div>

            <div className="bg-white rounded-xl">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 text-sm font-medium">Investment</span>
                </div>
                <h3 className="text-left text-2xl font-bold text-gray-900 mb-2">48.500,00€</h3>
                <p className="text-red-500 text-sm flex items-center">
                    <ArrowDownRight size={20} strokeWidth={1.8} className='mr-1'/>
                    -8% vs last year
                </p>
            </div>

            <div className="bg-white rounded-xl">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-yellow-600 text-sm font-medium">Savings</span>
                </div>
                <h3 className="text-left text-2xl font-bold text-gray-900 mb-2">23.435,00€</h3>
                <p className="text-green-500 text-sm flex items-center">
                    <ArrowUpRight size={20} strokeWidth={1.8} className='mr-1'/>
                    3% vs last year
                </p>
            </div>
        </div>
      </section>
    </main>
     
     
    </>
  )
}

export default App
