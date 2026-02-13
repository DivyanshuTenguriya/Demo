const express = require("express");
const router = express.Router();

const { showGallery } = require("../controller/galleryController");

router.get("/", showGallery);

module.exports = router;
