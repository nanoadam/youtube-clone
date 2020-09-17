const express = require('express');
const router = express.Router();

const {
  getVideos,
  getVideoById,
  addVideo,
} = require('../../controllers/videos');

router.get('/', getVideos);

router.get('/', getVideoById);

router.post('/', addVideo);

module.exports = router;
