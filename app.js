const express=require('express')
const chalk=require('chalk')
const path=require('path')
const booksRouter=express.Router();
const authorsRouter=express.Router();

var app=express()

app.set('views','./src/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"/public")))
app.use('/books',booksRouter)
app.use('/authors',authorsRouter)


booksRouter.route('/').get((req,res)=>
{
    res.render('books',{nav:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:"Books"})
})

authorsRouter.route('/').get((req,res)=>
{
    res.render('authors',{nav:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:"Authors"})
})

booksRouter.route('/single').get((req,res)=>
{
    res.send("Hello single Books")
})

app.get('/',(req,res)=>
{
    res.render('index',{nav:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:"Library"});
    
})



app.listen(2255, ()=>
{
    console.log('listening to port'+chalk.green('2255'))
});