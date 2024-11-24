import { useState, useEffect } from 'react';
import { Post } from '../types';

const initialPosts: Post[] = [
  {
    id: 1,
    username: "هلال سعودي",
    handle: "@hilali",
    content: "الهلال بطل آسيا للمرة الخامسة! 🏆💙",
    image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=800",
    likes: 5234,
    comments: 789,
    retweets: 1456,
    timestamp: "منذ 2 ساعة"
  },
  {
    id: 2,
    username: "مشجع هلالي",
    handle: "@blue_fan",
    content: "ميشاييل يسجل هدفاً عالمياً في مرمى الشباب ⚽️🎯",
    likes: 3987,
    comments: 445,
    retweets: 823,
    timestamp: "منذ 4 ساعات"
  }
];

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      username: "المستخدم",
      handle: "@user",
      content,
      likes: 0,
      comments: 0,
      retweets: 0,
      timestamp: "الآن"
    };
    setPosts([newPost, ...posts]);
  };

  const likePost = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const retweetPost = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, retweets: post.retweets + 1 } : post
    ));
  };

  return { posts, addPost, likePost, retweetPost };
}