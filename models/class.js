const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new mongoose.Schema({

  class: { type: String, unique: true },
    title: String,
    length: Date

}, { timestamps: true });


const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;
