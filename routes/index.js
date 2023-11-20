const express = require("express");
const router = express.Router();
const posController = require("../controllers/pos-controller");

router.get("/", posController.pos);

module.exports = {router}