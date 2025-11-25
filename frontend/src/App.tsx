import { useEffect, useState, useRef } from "react";
import { CreatePost } from "./components/CreatePost";
import type { PostProps } from "./components/Post";
import { PostList } from "./components/PostList";

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      await fetch(`http://localhost:5001/posts`)
        .then((data) => data.json())
        .then((json) => setPosts(json))
        .catch((err) => console.log(err));
    };

    getPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <CreatePost />
      <hr className="my-8 text-white w-[50%] m-auto" />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
