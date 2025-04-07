
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Mock market data
const marketIndices = [
  { name: "S&P 500", value: 4,892.38, change: 28.70, changePercent: 0.59, status: "up" },
  { name: "Dow Jones", value: 38,239.98, change: 62.42, changePercent: 0.16, status: "up" },
  { name: "Nasdaq", value: 15,927.90, change: 205.56, changePercent: 1.31, status: "up" },
  { name: "Russell 2000", value: 2,038.05, change: -5.83, changePercent: -0.29, status: "down" },
  { name: "10-Year Treasury", value: 4.624, change: 0.020, changePercent: 0.43, status: "up" },
  { name: "Euro", value: 1.066, change: -0.001, changePercent: -0.11, status: "down" },
];

// Mock chart data
const chartData = [
  { date: "Apr 1", value: 4700 },
  { date: "Apr 2", value: 4720 },
  { date: "Apr 3", value: 4780 },
  { date: "Apr 4", value: 4750 },
  { date: "Apr 5", value: 4830 },
  { date: "Apr 6", value: 4860 },
  { date: "Apr 7", value: 4892 },
];

// Mock top stories
const topStories = [
  {
    id: 1,
    title: "Fed's Powell Says Rate Cuts Possible If Inflation Continues to Ease",
    category: "Economics",
    time: "1h ago"
  },
  {
    id: 2,
    title: "Oil Climbs Above $85 a Barrel as Middle East Tensions Rise",
    category: "Markets",
    time: "2h ago"
  },
  {
    id: 3,
    title: "Tech Giants Face New Antitrust Scrutiny in Europe",
    category: "Technology",
    time: "3h ago"
  },
  {
    id: 4,
    title: "Treasury Yields Rise as Traders Assess Fed Policy Path",
    category: "Markets",
    time: "4h ago"
  },
];

const chartConfig = {
  data: {
    label: "S&P 500",
    theme: {
      light: "#10B981",
      dark: "#10B981"
    }
  }
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Markets</h1>
        <p className="text-muted-foreground">Last updated: April 7, 2025 16:30 EDT</p>
      </div>

      {/* Market Overview Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>S&P 500</CardTitle>
            <CardDescription className="flex items-center space-x-2">
              <span className="text-lg font-semibold">4,892.38</span>
              <span className="flex items-center text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +28.70 (+0.59%)
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer className="h-full" config={chartConfig}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis domain={['dataMin - 50', 'dataMax + 50']} tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#10B981" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Market Indices */}
        <Card>
          <CardHeader>
            <CardTitle>Market Indices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketIndices.map((index, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{index.name}</div>
                    <div className="text-2xl font-semibold">{index.value.toLocaleString()}</div>
                  </div>
                  <div className={`flex items-center ${index.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {index.status === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span>{index.change.toLocaleString()} ({index.changePercent.toFixed(2)}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Stories */}
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Top Stories</CardTitle>
          <Badge variant="secondary" className="flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            Trending
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topStories.map((story) => (
              <div key={story.id} className="flex flex-col">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Badge variant="success" className="mr-2">{story.category}</Badge>
                  <span>{story.time}</span>
                </div>
                <a href="#" className="text-lg font-medium hover:underline">{story.title}</a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
