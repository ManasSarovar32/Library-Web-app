const express=require('express')
const adminsRouter=express.Router();
const Bookdata=require('../model/Bookdata')

function adminrouter(nav){

    adminsRouter.route('/')
        .get((req,res)=>{
            res.render(
                'addBook',
                {
                    nav,
                    title:"Add Books"
                }
            )
        })

    adminsRouter.route('/add')
        .get((req,res)=>{
            var item={
                title:req.param('title'),
                author:req.param('author'),
                genre:req.param('genre')
            }
            var book=new Bookdata(item);
            book.save();
            res.redirect('/books')
        });

    return adminsRouter;
}
module.exports=adminrouter;