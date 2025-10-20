import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router";
import { ROUTES } from "@/utils/constants";
import Logo from "@/assets/logo.svg";
import {
  Bolt,
  ChartNoAxesColumn,
  ChartPie,
  Home,
  Wallet,
} from "lucide-react";
import React from "react";

interface NavParams {
  url: string;
  name: string;
  currentPath: string;
}

interface NavItemProps {
  navParams: NavParams;
  children: React.ReactNode;
}

const routes = [
  { url: ROUTES.HOME, name: "Overview", icon: Home },
  { url: ROUTES.WALLET, name: "Wallet", icon: Wallet },
  { url: ROUTES.ANALYSIS, name: "Analytics", icon: ChartPie },
  { url: ROUTES.TRANSACTION, name: "Transaction", icon: ChartNoAxesColumn },
  { url: ROUTES.SETTING, name: "Settings", icon: Bolt },
];

const NavItem: React.FC<NavItemProps> = ({ navParams, children }) => {
  const isActive = navParams.currentPath === navParams.url;

  return (
    <Link
      to={navParams.url}
      className={`rounded-full transition-colors ${
        isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

const IconWrapper = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => (
  <div
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
      active ? "bg-green-50" : "bg-white"
    }`}
  >
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
        active ? "bg-green-500" : "bg-white"
      }`}
    >
      {children}
    </div>
  </div>
);

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="md:px-8">
      {/* Top Bar */}
      <div className="lg:flex items-center justify-center w-full lg:min-h-screen">
        <div className="flex items-center justify-between lg:min-h-screen lg:flex-col h-full w-full pb-10 md:py-8 lg:py-5">
          <img src={Logo} alt="Bank Logo" className="w-7 h-7" />

          {/* Greeting + Navigation */}
          <div className="">
            {/* Navigation Tabs */}
            <div className="flex lg:block">
              {routes.map((route) => {
                const Icon = route.icon;
                const isActive = currentPath === route.url;

                return (
                  <NavItem
                    key={route.url}
                    navParams={{
                      url: route.url,
                      name: route.name,
                      currentPath,
                    }}
                  >
                    <IconWrapper active={isActive}>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white': 'text-black'}`} />
                    </IconWrapper>
                  </NavItem>
                );
              })}
            </div>
          </div>

          <div className="flex items-center">
            <Avatar className="rounded-full w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      
    </header>
  );
};

export default Header;
