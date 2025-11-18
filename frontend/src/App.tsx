import { CreatePost } from "./components/CreatePost";
import { PostList } from "./components/PostList";

const tempposts = [
  {
    id: 0,
    title: "Esimene",
    body: "Body of the first post",
    date: "2025-12-12",
    comments: [
      {
        id: 0,
        post_id: 0,
        body: "First comment on the first post",
      },
      {
        id: 1,
        post_id: 0,
        body: "Second comment on the first post",
      },
    ],
  },
  {
    id: 1,
    title: "Teine",
    body: "Body of the second post",
    date: "2025-12-13",
    comments: [
      {
        id: 0,
        post_id: 1,
        body: "First comment on the second post",
      },
    ],
  },
  {
    id: 2,
    title: "Kolmas",
    body: "Body of the third post",
    date: "2025-12-14",
    comments: [],
  },
];

function App() {
  return (
    <div className="">
      <CreatePost />
      <hr className="my-8 text-white w-[50%] m-auto" />
      <PostList posts={tempposts} />
    </div>
  );
}

export default App;
