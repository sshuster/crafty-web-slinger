
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag, ExternalLink } from "lucide-react";

// Mock news articles
const featuredNews = {
  id: 1,
  title: "Fed's Powell Signals Potential Rate Cuts As Inflation Cools",
  summary: "Federal Reserve Chair Jerome Powell indicated that the central bank could begin cutting interest rates in the coming months if inflation continues to move toward its 2% target.",
  category: "Economics",
  publishedAt: "1 hour ago",
  author: "Sarah Johnson",
  imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
};

const newsList = [
  {
    id: 2,
    title: "Oil Prices Surge Above $85 as Middle East Tensions Escalate",
    summary: "Crude oil prices jumped to their highest level in three months on Monday as escalating conflicts in the Middle East raised concerns about potential supply disruptions.",
    category: "Markets",
    publishedAt: "2 hours ago",
    author: "Michael Chen"
  },
  {
    id: 3,
    title: "Apple Plans to Expand AI Features Across Product Line",
    summary: "Apple Inc. is preparing to introduce a suite of artificial intelligence features across its entire product ecosystem, according to people familiar with the matter.",
    category: "Technology",
    publishedAt: "3 hours ago",
    author: "Jessica Roberts"
  },
  {
    id: 4,
    title: "European Markets Rally as ECB Signals Growth Optimism",
    summary: "European stocks climbed to record highs on Monday after the European Central Bank expressed optimism about the region's economic outlook despite recent pressures.",
    category: "Markets",
    publishedAt: "4 hours ago",
    author: "Thomas Mueller"
  },
  {
    id: 5,
    title: "Treasury Yields Hit 4.6% as Investors Reassess Fed's Rate Path",
    summary: "U.S. Treasury yields rose to 4.6% on Monday as investors recalibrated expectations for Federal Reserve interest rate cuts amid resilient economic data.",
    category: "Bonds",
    publishedAt: "5 hours ago",
    author: "Rachel Kim"
  },
  {
    id: 6,
    title: "Biden Administration Unveils New Tax Framework for Corporations",
    summary: "The White House proposed a new minimum tax on American corporations with profits exceeding $1 billion, aiming to fund infrastructure and social programs.",
    category: "Policy",
    publishedAt: "6 hours ago",
    author: "David Washington"
  },
  {
    id: 7,
    title: "Amazon Acquires Cybersecurity Firm for $3.5 Billion",
    summary: "Amazon announced on Monday that it will acquire a leading cybersecurity firm in a deal valued at $3.5 billion, expanding its enterprise security offerings.",
    category: "Technology",
    publishedAt: "7 hours ago",
    author: "Peter Grant"
  },
  {
    id: 8,
    title: "Gold Hits Record High on Safe-Haven Demand",
    summary: "Gold prices surged to an all-time high above $2,340 per ounce as investors sought safe-haven assets amid geopolitical tensions and inflation concerns.",
    category: "Commodities",
    publishedAt: "8 hours ago",
    author: "Linda Park"
  },
];

export default function News() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Latest News</h1>
        <p className="text-muted-foreground">Financial news and market insights as of April 7, 2025</p>
      </div>

      {/* Featured Article */}
      <Card className="mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5">
            <img
              src={featuredNews.imageUrl}
              alt={featuredNews.title}
              className="h-full w-full object-cover rounded-l-lg"
            />
          </div>
          <div className="md:w-3/5 flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge>{featuredNews.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredNews.publishedAt}
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl">{featuredNews.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{featuredNews.summary}</p>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <div className="text-sm text-muted-foreground">By {featuredNews.author}</div>
              <a href="#" className="text-primary flex items-center">
                <span className="mr-1">Read full story</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardFooter>
          </div>
        </div>
      </Card>

      {/* News List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{article.category}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.publishedAt}
                </div>
              </div>
              <CardTitle className="text-xl">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{article.summary}</p>
            </CardContent>
            <CardFooter className="flex justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">By {article.author}</div>
              <a href="#" className="text-primary flex items-center text-sm">
                <span className="mr-1">Read more</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
