import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router";
import { ROUTES } from "@/utils/constants";

const routes = [
  { url: ROUTES.HOME, name: 'Overview'}, 
  { url: ROUTES.WALLET, name: 'Wallet'}, 
  { url: ROUTES.ANALYSIS, name: 'Analytics'}, 
  { url: ROUTES.TRANSACTION, name: 'Transaction'}, 
  { url: ROUTES.SETTING, name: 'Settings'}, 
  // { url: ROUTES.REPORT, name: 'Report'}, 
];

interface NavParams { 
  url: string; 
  name: string; 
  currentPath: string; 
}

const NavItem = ({ navParams }: { navParams: NavParams }) => {
  return (
    <Link 
      to={navParams.url} // Use actual URL instead of 'hello'
      className={`pb-4 px-1 text-sm font-medium ${
        navParams.currentPath === navParams.url
          ? 'text-green-600 border-b-2 border-green-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {navParams.name}
    </Link>
  );
};

const Header = () => {
  const location = useLocation(); // Better variable name
  const currentPath = location.pathname; // Get pathname string

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
              <div className="font-medium">Jaylon Baptiste</div>
              <div className="text-gray-500 text-xs">@jaylonbaptiste</div>
            </div>
          </div>
        </div>
      </div>

      {/* nav */}
      <div className="flex align-baseline justify-between flex-wrap pt-10">
        {/* Welcome Section */}
        <div className="">
          <h1 className="text-xl font-bold mb-2">Good morning, Jaylon</h1>
          <p className="text-gray-600 text-sm">This is your finance report</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-600 mt-4 md:mt-0 overflow-auto">
          {routes.map((route) => (
            <NavItem 
              key={route.url}
              navParams={{
                url: route.url,
                name: route.name,
                currentPath: currentPath
              }} 
            />
          ))}
        </div>


      </div>
    </header>
  );
};

export default Header;