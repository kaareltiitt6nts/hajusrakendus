import express from "express";
import crypto from "crypto";

const app = express();
const PORT = 3002;

app.use(express.json());

const comments = [];

app.get("/comments", async (req, res) => {
  try {
    res.send(comments);
  } catch (error) {
    console.log(error);
  }
});

app.post("/comments", async (req, res) => {
  try {
    const event = req.body;
    const newComment = {
      id: crypto.randomBytes(4).toString("hex"),
      postId: event.postId,
      body: event.body,
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    console.log(newComment);
    comments.push(newComment);

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
      message: "Successfully created new comment!",
      data: newComment,
    });
  } catch (error) {}
});

app.post("/events", (req, res) => {
  try {
    try {
      const event = req.body;

      console.log(`received event: ${event.type}`);
      console.log(req.body.data);

      res.send({});
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Started comments service");
});
