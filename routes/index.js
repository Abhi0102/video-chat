const express = require("express");
const { generateUUID } = require("../controllers");
const Router = express.Router();

Router.route("/").get((req, res) => res.status(200).json({ hello: "There" }));
Router.route("/create-room").get(generateUUID);

module.exports = Router;
