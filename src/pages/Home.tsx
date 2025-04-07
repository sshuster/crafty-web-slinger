
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart2, Globe, LineChart, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl tracking-tight">BloomPro</div>
            <div className="space-x-2">
              <Link to="/login">
                <Button variant="ghost" className="text-white hover:bg-gray-800">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="default">Subscribe</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Financial intelligence for the world's decision makers
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
                Get breaking news, in-depth market analysis, and real-time data to help you make smarter investment decisions.
              </p>
              <div className="space-x-4">
                <Link to="/register">
                  <Button size="lg" className="font-medium">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-gray-800 font-medium">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Professional analyzing financial data" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BloomPro</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-time Market Data</h3>
                <p className="text-muted-foreground">
                  Access comprehensive, real-time data across global markets to make informed decisions quickly.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Analysis</h3>
                <p className="text-muted-foreground">
                  Get insights from industry-leading analysts and exclusive commentary on market movements.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
                <p className="text-muted-foreground">
                  Stay informed with 24/7 coverage of markets, businesses, and economic events around the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Market Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Today's Market Highlights</h2>
            <Link to="/markets" className="text-primary flex items-center hover:underline">
              View all markets <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">S&P 500</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.59%
                </div>
              </div>
              <div className="text-2xl font-bold mb-2">4,892.38</div>
              <div className="text-sm text-muted-foreground">+28.70 points</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Dow Jones</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.16%
                </div>
              </div>
              <div className="text-2xl font-bold mb-2">38,239.98</div>
              <div className="text-sm text-muted-foreground">+62.42 points</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Nasdaq</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +1.31%
                </div>
              </div>
              <div className="text-2xl font-bold mb-2">15,927.90</div>
              <div className="text-sm text-muted-foreground">+205.56 points</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Bitcoin</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +2.47%
                </div>
              </div>
              <div className="text-2xl font-bold mb-2">$68,452</div>
              <div className="text-sm text-muted-foreground">+$1,652</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join millions of professionals who rely on BloomPro for critical financial insights and market intelligence.
          </p>
          <Link to="/register">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-foreground/10">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
      
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
