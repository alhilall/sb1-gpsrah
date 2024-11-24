import Post from '../components/Post';
import { usePosts } from '../hooks/usePosts';

function Home() {
  const { posts } = usePosts();

  return (
    <div className="max-w-lg mx-auto px-4">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Home;