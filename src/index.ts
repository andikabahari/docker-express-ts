import express from "express";
import path from "path";

const app = express();
const port: number = 5000;

app.get("/", (req, res) => {
  const file: string = path.join(__dirname, "pages", "index.html");
  res.sendFile(file);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
