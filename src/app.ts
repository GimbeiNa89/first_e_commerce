import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "SERVER IS RUNNING!" });
});

export default app;
