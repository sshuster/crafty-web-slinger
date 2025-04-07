
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, ThumbsUp, Share } from "lucide-react";

interface FeedPostProps {
  author: string;
  authorRole: string;
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const FeedPost = ({
  author,
  authorRole,
  timeAgo,
  content,
  image,
  likes,
  comments,
}: FeedPostProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const getRandomAvatar = () => {
    const initials = author.split(' ').map(name => name[0]).join('');
    return initials;
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarFallback>{getRandomAvatar()}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-xs text-gray-500">{authorRole}</p>
            <p className="text-xs text-gray-400">{timeAgo}</p>
          </div>
        </div>
        
        {/* Post Content */}
        <p className="mt-3 text-gray-800">{content}</p>
      </div>
      
      {/* Post Image (if any) */}
      {image && (
        <div className="w-full">
          <img 
            src={image} 
            alt="Post attachment" 
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
      )}
      
      {/* Post Stats */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            {likeCount > 0 && (
              <>
                <span className="text-blue-600 mr-1">👍</span> 
                {likeCount}
              </>
            )}
          </span>
          <span>{comments > 0 ? `${comments} comments` : ''}</span>
        </div>
      </div>
      
      <Separator />
      
      {/* Post Actions */}
      <div className="px-2 py-1 flex justify-around">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex gap-2 ${liked ? 'text-blue-600' : ''}`} 
          onClick={handleLike}
        >
          <ThumbsUp className="h-5 w-5" />
          <span>Like</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex gap-2">
          <MessageSquare className="h-5 w-5" />
          <span>Comment</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex gap-2">
          <Share className="h-5 w-5" />
          <span>Share</span>
        </Button>
      </div>
    </div>
  );
};

export default FeedPost;
