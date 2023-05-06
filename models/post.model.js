const mongoose = require('mongoose');
const post = mongoose.Schema({
authorName:String,
noticeTitle: String,
noticeDescription: String,
date: { type: Date, default: Date.now }
})

const PostModel = mongoose.model(`post`, post)

module.exports= PostModel;