// getting all express methods
const express = require ('express');

//express app
const app = express(); 

// requiring the morgan middleware
const morgan = require('morgan');

//requiring mongoose to connect to  mongodb
const mongoose = require('mongoose');



//importing the blog module created

const { render }  = require('ejs');

// requiring the blogs  route
const blogRoutes = require('./routes/blogRoutes');
//creating a  new variable to hold mongodb's connection string
const dbURI= 'mongodb+srv://netninja1:<password>@cluster0.kugvz7j.mongodb.net/Cluster0'
//connecting with mongoose to the database and listening to a request after it has completed
mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=>{console.log(err)})
//rejister view eingine
app.set('view engine','ejs');

// listen for a request
console.log("connected");

//middleware and static
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
//mongoose and mongo sandbox routes then delete it
// app.get('/add-blog',(req,res)=>{
// const blog = new Blog({
//     title:'new blog',
//     snippet: 'about my new blog',
//     body:'more about my new blog' 
// })
// blog.save()
// .then((result)=>{
// res.send(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// });
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);

//     })
//     .catch(((err)=>{
//         console.log(err)
//     }))
// })
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('64737924193214a347870622')
//     .then((result)=>{
//   res.send(result)
//     })
//     .catch(((err)=>{
//         console.log(err)
//     }))
// })

// using a middleware to log information about the requests to the console
// app.use((req,res,next)=>{
// console.log('new request made');
// console.log('host:',req.hostname);
// console.log('path:',req.path);
// console.log('Method:',req.method);
// next();
// })

// app.use((req,res,next)=>{
//     console.log('in the next middleware'); 
    
//     next();
//     })




//getting  route.
app.get('/',(req,res) =>{ 
// // res.send('<p>homepage</p>');
// const blogs =[
//     {title: 'yoshi finds eggs ' , snippet:'lorem ipsum dolor sit amet consectetur'},
//     {title: 'mario finds stars ' , snippet:'lorem ipsum dolor sit amet consectetur'},
//     {title: 'how to defeat bowser ' , snippet:'lorem ipsum dolor sit amet consectetur'},
// ]
// res.render('index' , {title : 'home',blogs})
 res.redirect('/blogs');
});

app.get('/about',(req,res) =>{ 
    // res.send('<p>aboutpage</p>');
    res.render('about', {title : 'about'});
    });
   
    // blog routes
    app.use('/blogs',blogRoutes);

   
//404 page
    app.use((req,res)=>{
res.status(404).render(404, {title : '404 not found '})
});

    
