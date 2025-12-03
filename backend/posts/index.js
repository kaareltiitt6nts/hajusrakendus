import express from "express";
import cors from "cors";
import crypto from "crypto";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const posts = [];

app.get("/posts", async (req, res) => {
  try {
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
      id: crypto.randomBytes(4).toString("hex"),
      postId: crypto.randomBytes(4).toString("hex"),
      title: req.body.title,
      body: req.body.body,
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    posts.push(newPost);

    await fetch("http://event-bus:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "CreatePost",
        data: newPost,
      }),
    });

    res.send({ message: "Successfully created new post!", data: newPost });
  } catch (error) {
    console.log(error);
    res.send({ message: "Internal server error" });
  }
});

app.post("/events", (req, res) => {
  try {
    const event = req.body;

    console.log(`received event: ${event.type}`);
    console.log(req.body.data);

    res.send({ message: "OK" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Started posts service on port ${PORT}`);
});
