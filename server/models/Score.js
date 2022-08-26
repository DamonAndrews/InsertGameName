const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  userScore: {
    type: Number,
    required: true,
    // required: 'You need to leave a thought!',
    // minlength: 1,
    // maxlength: 280,
    // trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
});

const Score = model('Score', scoreSchema);

module.exports = Score;
