
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const NetworkCard = () => {
  const connections = [
    { name: "Emily Wilson", role: "Product Designer", avatar: "EW" },
    { name: "Michael Chen", role: "Frontend Developer", avatar: "MC" },
    { name: "Sarah Johnson", role: "Marketing Lead", avatar: "SJ" },
  ];

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Add to your feed</h3>
        </div>

        <div className="space-y-4">
          {connections.map((connection, index) => (
            <div key={index} className="flex items-start gap-2">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{connection.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm">{connection.name}</p>
                <p className="text-xs text-gray-600">{connection.role}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-1 text-xs h-7 rounded-full border-gray-400"
                >
                  + Follow
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button variant="ghost" className="w-full text-gray-500 mt-3 text-sm" size="sm">
          View all recommendations
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-3">Latest News</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <p className="font-medium">Tech layoffs continue in Q2</p>
            <p className="text-xs text-gray-500">1d ago • 4,567 readers</p>
          </li>
          <li>
            <p className="font-medium">New trends in remote work</p>
            <p className="text-xs text-gray-500">2d ago • 3,211 readers</p>
          </li>
          <li>
            <p className="font-medium">AI tools revolutionize productivity</p>
            <p className="text-xs text-gray-500">3d ago • 5,842 readers</p>
          </li>
        </ul>
        
        <Button variant="ghost" className="w-full text-gray-500 mt-3 text-sm" size="sm">
          Show more
        </Button>
      </div>
    </>
  );
};

export default NetworkCard;
