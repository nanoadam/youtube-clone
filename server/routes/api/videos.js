const express = require("express");
const router = express.Router();

// @route       /api/v1/videos
// @desc        Get all videos
// @access      Public
router.get("/", (req, res) => {
  res.send("Getting all videos");
});

module.exports = router;
