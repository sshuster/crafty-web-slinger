
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, ChevronDown, Bell, User, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/dashboard" },
  { name: "Markets", href: "/markets" },
  { name: "News", href: "/news" },
  { name: "Industries", href: "/industries" },
  { name: "Technology", href: "/technology" },
  { name: "Politics", href: "/politics" },
];

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mr-2 md:hidden text-white hover:bg-gray-800"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              {/* Logo */}
              <Link to="/dashboard" className="flex items-center">
                <span className="font-bold text-xl tracking-tight">BloomPro</span>
              </Link>
            </div>
            
            {/* Search */}
            <div className="hidden md:flex flex-1 mx-8 max-w-md">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input 
                  type="search"
                  className="ps-10 w-full bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
                  placeholder="Search news, symbols, companies..."
                />
              </div>
            </div>
            
            {/* Right buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <Bell className="h-5 w-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-gray-800">
                    <User className="h-5 w-5 mr-1" />
                    <span className="hidden md:inline">Account</span>
                    <ChevronDown className="h-4 w-4 md:ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Subscriptions</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 flex items-center">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Bottom navigation */}
          <nav className="hidden md:flex h-10">
            <ul className="flex space-x-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`inline-flex h-10 items-center text-sm font-medium transition-colors hover:text-gray-400 ${
                      location.pathname === item.href ? "border-b-2 border-blue-500" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <div className="inline-flex h-10 items-center">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800 h-8 px-2">
                    More <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-3">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input 
                type="search"
                className="ps-10 w-full bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
                placeholder="Search news, symbols, companies..."
              />
            </div>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.href ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-white">BloomPro</h3>
              <p className="text-sm">The premier source for business and financial market news.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Markets</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Stocks</a></li>
                <li><a href="#" className="hover:text-white">Currencies</a></li>
                <li><a href="#" className="hover:text-white">Commodities</a></li>
                <li><a href="#" className="hover:text-white">Rates & Bonds</a></li>
                <li><a href="#" className="hover:text-white">Futures</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Industries</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Technology</a></li>
                <li><a href="#" className="hover:text-white">Energy</a></li>
                <li><a href="#" className="hover:text-white">Healthcare</a></li>
                <li><a href="#" className="hover:text-white">Finance</a></li>
                <li><a href="#" className="hover:text-white">Real Estate</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Advertising</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-center">
            <p>© 2025 BloomPro. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
