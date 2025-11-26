import express from "express";

const app = express();
const PORT = 3003;

app.use(express.json());

app.post("/events", async (req, res) => {
  try {
    const event = req.body;
    const type = event.type;
    const data = event.data;

    if (type === "CreateComment") {
      console.log("create comment");

      if (data.body.includes("orange")) {
        data.status = "rejected";
      } else {
        data.status = "approved";
      }

      console.log(
        JSON.stringify({
          type: "ModerateComment",
          data: data,
        })
      );

      await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "ModerateComment",
          data: data,
        }),
      });
    }

    res.send({ message: "OK" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`started moderation service on port ${PORT}`);
});
