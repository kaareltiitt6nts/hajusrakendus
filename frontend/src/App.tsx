import { useEffect, useState, useRef } from "react";
import { CreatePost } from "./components/CreatePost";
import type { PostProps } from "./components/Post";
import { PostList } from "./components/PostList";

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`/posts/`);
      const json = await res.json();
      setPosts(json);
    };

    getPosts();
  }, []);

  return (
    <div>
      <CreatePost />
      <hr className="my-8 text-white w-[50%] m-auto" />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
