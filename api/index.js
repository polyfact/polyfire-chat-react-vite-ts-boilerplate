const express = require("express");
const { Chat } = require("polyfact");
const cors = require("cors");

const chat = new Chat();

const app = express();

app.use(cors()); // enable CORS
app.use(express.json());

app.post("/chat", (req, res) => {
  console.log("Received message");
  chat
    .sendMessage(req.body.message)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred");
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
