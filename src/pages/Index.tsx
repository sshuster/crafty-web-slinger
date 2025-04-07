
import { Button } from "@/components/ui/button";
import { BellIcon, MessageSquare, Search, Users, Home, Grid2X2, LogIn, UserPlus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import FeedPost from "@/components/FeedPost";
import ProfileCard from "@/components/ProfileCard";
import NetworkCard from "@/components/NetworkCard";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-blue-600 font-bold text-3xl">in</h1>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input 
                className="pl-10 w-64 bg-gray-100 focus:bg-white" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <nav>
            <ul className="flex items-center space-x-6">
              {isLoggedIn ? (
                <>
                  <li className="hidden md:block">
                    <Button variant="ghost" size="icon" className="flex flex-col items-center">
                      <Home className="h-6 w-6" />
                      <span className="text-xs mt-1">Home</span>
                    </Button>
                  </li>
                  <li className="hidden md:block">
                    <Button variant="ghost" size="icon" className="flex flex-col items-center">
                      <Users className="h-6 w-6" />
                      <span className="text-xs mt-1">Network</span>
                    </Button>
                  </li>
                  <li className="hidden md:block">
                    <Button variant="ghost" size="icon" className="flex flex-col items-center">
                      <Grid2X2 className="h-6 w-6" />
                      <span className="text-xs mt-1">Jobs</span>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="icon" className="flex flex-col items-center">
                      <MessageSquare className="h-6 w-6" />
                      <span className="text-xs mt-1">Messages</span>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="icon" className="flex flex-col items-center relative">
                      <BellIcon className="h-6 w-6" />
                      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                      <span className="text-xs mt-1">Notices</span>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="icon" className="flex flex-col items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span className="text-xs mt-1">You</span>
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      <Button variant="ghost" className="flex items-center">
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <Button className="flex items-center">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join Now
                      </Button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {isLoggedIn ? (
        <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
          <aside className="md:col-span-3">
            <ProfileCard />
          </aside>

          <section className="md:col-span-6 space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-gray-500 bg-gray-100 hover:bg-gray-200"
                >
                  Start a post
                </Button>
              </div>
            </div>

            <Separator className="my-4" />

            <FeedPost 
              author="Jane Smith"
              authorRole="Senior Developer at Tech Company"
              timeAgo="2h"
              content="Just finished working on a new project using React and TypeScript. Love how the type safety improves development experience!"
              likes={42}
              comments={12}
            />

            <FeedPost 
              author="John Doe"
              authorRole="Product Manager"
              timeAgo="1d"
              content="Looking for recommendations on product analytics tools. What are you using these days?"
              likes={17}
              comments={23}
            />

            <FeedPost 
              author="Alice Johnson"
              authorRole="UI/UX Designer"
              timeAgo="2d"
              content="Just published my latest design portfolio. Check it out and let me know what you think!"
              image="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              likes={89}
              comments={34}
            />
          </section>

          <aside className="md:col-span-3 space-y-4">
            <NetworkCard />
          </aside>
        </main>
      ) : (
        <div className="bg-white">
          <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Welcome to your professional community</h1>
              <div className="space-y-4 max-w-md">
                <p className="text-xl text-gray-600">Find new opportunities, connect with industry professionals, and build your career.</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link to="/login" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Professional networking" 
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
            </div>
          </section>
          
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Connect with professionals around the world</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Find the right job</h3>
                  <p className="text-gray-600">Discover new opportunities that match your skills and experience.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Connect with others</h3>
                  <p className="text-gray-600">Build your network and engage with professionals in your industry.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Learn new skills</h3>
                  <p className="text-gray-600">Access courses and resources to advance your career.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;
