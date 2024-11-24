export interface Post {
  id: number;
  username: string;
  handle: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  retweets: number;
  timestamp: string;
}

export interface Comment {
  id: number;
  postId: number;
  content: string;
  username: string;
  timestamp: string;
}

export interface Notification {
  id: number;
  type: 'like' | 'follow' | 'comment';
  username: string;
  content: string;
  timestamp: string;
}

export interface TrendingTopic {
  topic: string;
  tweets: string;
}