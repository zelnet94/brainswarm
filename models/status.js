const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new mongoose.Schema({

  status: { type: String, unique: true },
    isNoted: Boolean,
    timePosted: Date
  

}, { timestamps: true });


const Status = mongoose.model('Status', StatusSchema);

module.exports = Status;
