import express from "express";
import routes from "./src/routes/routes.mjs";

const app = express();

app.use(routes);

app.use((req, res) => {
  res.send("Hello World");
});

export default app;