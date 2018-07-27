const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LectureSchema = new mongoose.Schema({

  lecture: { type: String, unique: true },
    title: String,
    date: Date,
    rating: Number,
    views: Number,
    annotations: Number


}, { timestamps: true });


const Lecture = mongoose.model('Lecture', LectureSchema);

module.exports = Lecture;
