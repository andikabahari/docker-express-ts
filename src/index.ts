import express from "express";
import path from "path";

const app = express();

const HOST: string = "0.0.0.0";
const PORT: number = 5000;

app.get("/", (req, res) => {
  const basepath: string = process.cwd();
  const file: string = path.join(basepath, "src", "pages", "index.html");
  res.sendFile(file);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
