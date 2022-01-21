import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
const routerApi = require('./routes/api');

const app = express();

app.set("pkg", pkg);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
      name: app.get('pkg').name,
      author: app.get('pkg').author,
      description: app.get('pkg').description,
      version: app.get('pkg').version
  });
});

app.use('/api', routerApi);

export default app;
