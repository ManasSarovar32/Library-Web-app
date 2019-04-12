const express=require('express')
const chalk=require('chalk')
const path=require('path')
const authorsRouter=express.Router();

var app=express()

const nav=[
            {link:'/books',title:'books'},
            {link:'/authors',title:'authors'},
            {link:'/addBook',title:'Admin'}
          ];

const booksRouter=require('./src/routes/bookRoutes')(nav);
const adminsRouter=require('./src/routes/adminRoutes')(nav);


app.set('views','./src/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"/public")))
app.use('/books',booksRouter)
app.use('/authors',authorsRouter)
app.use('/addBook',adminsRouter)



app.get('/',(req,res)=>
{
    res.render('index',
    {nav,title:"Library"});
    
})




authorsRouter.route('/').get((req,res)=>
{
    res.render('authors',
    {nav:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:"Authors"})
})


app.listen(2255, ()=>
{
    console.log('listening to port'+chalk.red('2255'))
});