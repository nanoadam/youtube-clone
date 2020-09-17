// @route       /api/v1/videos
// @desc        Get all videos
// @access      Public
exports.getVideos = (req, res, next) => {
  res.send('Getting videos');
};

// @route       /api/v1/videos/:id
// @desc        Get a video by id
// @access      Public
exports.getVideoById = (req, res, next) => {
  res.send('Getting a video by id');
};

exports.addVideo = (req, res, next) => {
  res.send('adding a video...');
};
