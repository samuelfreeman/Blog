const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose creating a schema and structing the data
const blogschema = new Schema({
title : {
    type :String,
    required: true
},

snippet :{
    type:String,
    required:true
},
body:{
    type :String,
    required: true
}

},{timestamps:true});
//looks for the collection inside the database
const Blog = mongoose.model('Blog',blogschema);
module.exports = Blog;