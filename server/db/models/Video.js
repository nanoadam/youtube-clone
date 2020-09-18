const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Video title is required'],
    minLength: [3, 'The title of the video must be at least 3 characters'],
    maxLength: [225, 'The title of the video must be less than 225 characters'],
  },
  description: {
    type: String,
    maxLength: [5000, 'Description can max be 5000 characters'],
    default: 'No description provided',
  },
  views: [
    {
      ref: {},
    },
  ],
});

module.exports = mongoose.model('Video', VideoSchema);
