import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

const posts = [];

app.get("/posts", (req, res) => {
  try {
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

app.post("/events", (req, res) => {
  const event = req.body;
  const type = req.body.type;
  const data = req.body.data;

  console.log(`received event: ${type}`);

  if (type === "CreatePost") {
    console.log("create post");

    const newPost = {
      ...data,
      comments: [],
    };

    posts.push(newPost);

    return res.send(event);
  }

  if (type === "CreateComment") {
    console.log("create comment");

    posts.find((post) => post.postId === data.postId).comments.push(data);

    console.log(posts);

    return res.send(event);
  }

  if (type === "UpdateComment") {
    console.log("update comment");
    console.log(data);

    const post = posts.find((post) => post.postId === data.postId);
    console.log(post);
    console.log(post.comments);

    const comment = post.comments.find((comment) => comment.id === data.id);

    console.log(comment);

    comment.status = data.status;

    return res.send(event);
  }

  res.send({ message: "OK" });
});

app.listen(PORT, () => {
  console.log(`started query service on port ${PORT}`);
});
