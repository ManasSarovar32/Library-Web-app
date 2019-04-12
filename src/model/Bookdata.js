const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongolibrarydb');
const Schema=mongoose.Schema;

var NewBookSchema=new Schema({
    title:String,
    author:String,
    genre:String
});

var Bookdata=mongoose.model('Book-data',NewBookSchema);

module.exports=Bookdata;