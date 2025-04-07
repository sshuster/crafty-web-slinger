
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Globe, DollarSign } from "lucide-react";

// Mock market data
const markets = [
  { name: "S&P 500", value: 4892.38, change: 28.70, changePercent: 0.59, status: "up", volume: "2.1B" },
  { name: "Dow Jones", value: 38239.98, change: 62.42, changePercent: 0.16, status: "up", volume: "332.2M" },
  { name: "Nasdaq", value: 15927.90, change: 205.56, changePercent: 1.31, status: "up", volume: "4.5B" },
  { name: "Russell 2000", value: 2038.05, change: -5.83, changePercent: -0.29, status: "down", volume: "830.7M" },
  { name: "FTSE 100", value: 7930.96, change: 26.47, changePercent: 0.33, status: "up", volume: "586.3M" },
  { name: "Nikkei 225", value: 39602.02, change: -176.98, changePercent: -0.44, status: "down", volume: "1.2B" },
  { name: "DAX", value: 18384.35, change: 124.35, changePercent: 0.68, status: "up", volume: "342.1M" },
  { name: "Hang Seng", value: 17893.41, change: -121.72, changePercent: -0.67, status: "down", volume: "1.8B" },
];

// Mock currencies
const currencies = [
  { name: "EUR-USD", value: 1.0660, change: -0.0012, changePercent: -0.11, status: "down" },
  { name: "USD-JPY", value: 151.65, change: 0.23, changePercent: 0.15, status: "up" },
  { name: "GBP-USD", value: 1.2532, change: 0.0018, changePercent: 0.14, status: "up" },
  { name: "USD-CHF", value: 0.9048, change: -0.0003, changePercent: -0.03, status: "down" },
  { name: "USD-CAD", value: 1.3638, change: 0.0016, changePercent: 0.12, status: "up" },
  { name: "AUD-USD", value: 0.6621, change: -0.0008, changePercent: -0.12, status: "down" },
];

// Mock commodities
const commodities = [
  { name: "WTI Crude", value: 85.66, change: 1.85, changePercent: 2.21, status: "up" },
  { name: "Brent Crude", value: 89.95, change: 1.65, changePercent: 1.87, status: "up" },
  { name: "Gold", value: 2345.80, change: 12.30, changePercent: 0.53, status: "up" },
  { name: "Silver", value: 27.98, change: 0.11, changePercent: 0.39, status: "up" },
  { name: "Copper", value: 4.21, change: -0.02, changePercent: -0.47, status: "down" },
  { name: "Natural Gas", value: 2.03, change: -0.05, changePercent: -2.40, status: "down" },
];

export default function Markets() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Markets</h1>
        <p className="text-muted-foreground">Comprehensive market data as of April 7, 2025 16:30 EDT</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Global Indices */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Global Indices
            </CardTitle>
            <Badge variant="outline">Live Updates</Badge>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Index</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Change</TableHead>
                  <TableHead className="text-right">% Change</TableHead>
                  <TableHead className="text-right">Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {markets.map((market, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{market.name}</TableCell>
                    <TableCell className="text-right">{market.value.toLocaleString()}</TableCell>
                    <TableCell className={`text-right ${market.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {market.status === 'up' ? '+' : ''}{market.change.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-right ${market.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      <div className="flex items-center justify-end">
                        {market.status === 'up' ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        {market.status === 'up' ? '+' : ''}{market.changePercent.toFixed(2)}%
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{market.volume}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Currencies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Currencies
              </CardTitle>
              <CardDescription>Major currency pairs</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pair</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                    <TableHead className="text-right">% Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currencies.map((currency, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{currency.name}</TableCell>
                      <TableCell className="text-right">{currency.value.toFixed(4)}</TableCell>
                      <TableCell className={`text-right ${currency.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {currency.status === 'up' ? '+' : ''}{currency.change.toFixed(4)}
                      </TableCell>
                      <TableCell className={`text-right ${currency.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {currency.status === 'up' ? '+' : ''}{currency.changePercent.toFixed(2)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Commodities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Commodities
              </CardTitle>
              <CardDescription>Energy and precious metals</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                    <TableHead className="text-right">% Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {commodities.map((commodity, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{commodity.name}</TableCell>
                      <TableCell className="text-right">${commodity.value.toFixed(2)}</TableCell>
                      <TableCell className={`text-right ${commodity.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {commodity.status === 'up' ? '+' : ''}${commodity.change.toFixed(2)}
                      </TableCell>
                      <TableCell className={`text-right ${commodity.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {commodity.status === 'up' ? '+' : ''}{commodity.changePercent.toFixed(2)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
