require("dotenv").config();
const { connectDB } = require("./db/connection");
const express = require("express");
const app = express();
const port = 5000;
const router = require("./Router/taskRoute");

// MiddleWare
app.use(express.json());

//Routes
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/api/tasks", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Task app listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
