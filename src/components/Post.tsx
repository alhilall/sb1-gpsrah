import { Post as PostType } from '../types';
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

interface PostProps extends PostType {
  onLike?: (id: number) => void;
  onRetweet?: (id: number) => void;
  onComment?: (id: number) => void;
}

function Post({ id, username, handle, content, image, likes, comments, retweets, timestamp, onLike, onRetweet, onComment }: PostProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start mb-3">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
            {username[0]}
          </div>
          <div className="mr-3 flex-1">
            <h3 className="font-bold">{username}</h3>
            <p className="text-gray-500 text-sm">{handle} · {timestamp}</p>
          </div>
        </div>
        <p className="text-gray-800 mb-3">{content}</p>
        {image && (
          <img 
            src={image} 
            alt={content}
            className="w-full h-64 object-cover rounded-lg mb-3"
          />
        )}
        <div className="flex justify-around pt-3 border-t border-gray-100">
          <button 
            onClick={() => onComment?.(id)}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600"
          >
            <MessageCircle size={20} />
            <span>{comments}</span>
          </button>
          <button 
            onClick={() => onRetweet?.(id)}
            className="flex items-center gap-2 text-gray-500 hover:text-green-600"
          >
            <Repeat2 size={20} />
            <span>{retweets}</span>
          </button>
          <button 
            onClick={() => onLike?.(id)}
            className="flex items-center gap-2 text-gray-500 hover:text-red-600"
          >
            <Heart size={20} />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
            <Share size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Post;