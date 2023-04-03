import express from "express";

const PORT = 3000;

const app = express();

//list of allowed request:
app.get("/hello", (req, rest) => {
  res.send("Hello there!");
});

app.get("/test", (req, rest) => {
  res.send("It's working! 🥳");
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}...`);
  // console.log("listening on http://localhost:" + PORT + "...");
});
