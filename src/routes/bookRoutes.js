const express=require('express')
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');

function bookrouter(nav){

    booksRouter.route('/')
        .get((req,res)=>{
            Bookdata.find()
            .then(function(books){
                res.render('books',{nav,title:"Books",books});
            });
        })

    booksRouter.route('/:id')
        .get((req,res)=>{
            const id=req.params.id;
           
            Bookdata.findOne({_id:id})
                .then(function(book){
                    res.render('book',
                {
                    nav,
                    title:'Books',
                    book
                })
                })
    })

    
    return booksRouter;
}
module.exports=bookrouter;