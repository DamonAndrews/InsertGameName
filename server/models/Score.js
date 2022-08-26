const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  userScore: {
    type: Number,
    required: true,

  },
<<<<<<< HEAD
=======

>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
  userName: {
    type: String,
    required: true,
    trim: true,
  },
});

const Score = model('Score', scoreSchema);

module.exports = Score;
