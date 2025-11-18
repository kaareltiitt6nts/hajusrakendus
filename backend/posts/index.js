import express from "express";
import db from "./db.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const posts = await db.query("select * from posts");

    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Started posts service");
});
