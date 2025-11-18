import express from "express";
import db from "./db.js";

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/comments", async (req, res) => {
  try {
    const posts = await db.query("select * from comments");

    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Started posts service");
});
