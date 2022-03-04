//import express from "express";
const express = require("express");
const morgan = require("morgan");
//import morgan from "morgan";

const routerApi = require("./routes/api");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routerApi);


export default app;
