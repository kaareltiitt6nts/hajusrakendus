import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/events", async (req, res) => {
  try {
    const body = req.body;
    const type = body.type;

    if (!type) {
      res.send({ message: "No event type specified" });
    }

    console.log(`received event: ${type}`);

    await fetch("http://localhost:3001/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        data: req.body.data || {},
      }),
    });

    await fetch("http://localhost:5001/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        data: req.body.data || {},
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
