const express = require("express");
const router = express.Router();

const { userInfo } = require("../controller/userController");

router.get("/", userInfo);

module.exports = router;
