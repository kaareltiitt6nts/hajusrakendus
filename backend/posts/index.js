import express from "express";
import db from "./db.js";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const posts = await db.query("select * from posts");

    res.send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    const result = await db.query(
      "insert into posts (title, body, created_at) values (?, ?, ?)",
      [newPost.title, newPost.body, newPost.created_at]
    );

    await fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "CreatePost",
        data: newPost,
      }),
    });

    res.send({ message: "Successfully created new post!" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Internal server error" });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await db.query("select * from posts where id = ? limit 1", [
      id,
    ]);

    res.send(posts[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

app.get("/posts/:id/comments", async (req, res) => {
  try {
    const id = req.params.id;
    const comments = await db.query(
      "select * from comments where post_id = ?",
      [id]
    );

    res.send(comments);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

app.post("/posts/:id/comments", async (req, res) => {
  try {
    const id = req.params.id;
    const newComment = {
      post_id: id,
      body: req.body.body,
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    const comment = await db.query(
      "insert into comments (post_id, body, created_at) values (?, ?, ?)",
      [newComment.post_id, newComment.body, newComment.created_at]
    );

    await fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "CreateComment",
        data: newComment,
      }),
    });

    res.send({
      message: "Successfully created comment",
      comment: newComment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

app.post("/events", (req, res) => {
  try {
    const event = req.body;

    console.log(`received event: ${event.type}`);
    console.log(req.body.data);

    res.send({});
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Started posts service");
});
