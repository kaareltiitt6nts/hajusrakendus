import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/events", async (req, res) => {
  try {
    console.log(req.body);

    const event = req.body;
    const type = event.type;
    const data = event.data;

    if (!type) {
      return res.send({ message: "No event type specified" });
    }

    // posts
    fetch("http://posts:3001/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        data: data || {},
      }),
    });

    // comments
    fetch("http://comments:3002/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        data: data || {},
      }),
    });

    // moderation
    fetch("http://moderation:3003/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        data: data || {},
      }),
    });

    // query
    fetch("http://query:5001/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        data: data || {},
      }),
    });

    res.send({ message: "OK" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`event-bus started listening on port ${PORT}`);
});
