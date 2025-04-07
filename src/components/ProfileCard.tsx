
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      {/* Cover Image */}
      <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-lg" />
      
      {/* Profile Info */}
      <div className="p-4 relative">
        <Avatar className="h-16 w-16 absolute -top-8 border-4 border-white">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        <div className="pt-8">
          <h2 className="font-bold text-lg">Chris Norman</h2>
          <p className="text-sm text-gray-600">Senior Software Engineer</p>
          <p className="text-xs text-gray-500 mt-1">San Francisco, CA</p>
        </div>
        
        <Separator className="my-3" />
        
        <div className="text-sm">
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Who viewed your profile</span>
            <span className="font-semibold text-blue-600">54</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Views of your post</span>
            <span className="font-semibold text-blue-600">436</span>
          </div>
        </div>
        
        <Separator className="my-3" />
        
        <div className="text-sm">
          <p className="text-gray-800 font-medium mb-1">Access exclusive tools & insights</p>
          <div className="flex items-center text-gray-600 mb-3">
            <span className="h-4 w-4 bg-amber-600 rounded-sm mr-2"></span>
            <span>Try Premium for free</span>
          </div>
        </div>
        
        <Button className="w-full text-sm justify-start" variant="ghost">
          <span className="mr-1">🏢</span> My Items
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
