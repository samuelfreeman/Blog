// requiring the http files to create a server 
const http = require('http');


const fs = require('fs');
const _ = require('lodash');
// creating a server
const server = http.createServer(( req , res) => {
     
     //lodash
const num = _.random(0,20);
console.log(num);
const greet =_.once(() =>{
   console.log('hello');
})
greet();
greet();
  //set header content type . 
  res.setHeader('content-Type','text/html');

  let path = './views';
  switch(req.url){ 
 case '/':
 path += '/index.html';
 break;
 case '/about':
    path += '/about.html'
    break;
    default :
    path += '/404.html'
    break;
  }
  //send an html file
  fs.readFile( path ,(err ,data)=>{
 if (err) {
    console.log(err);
    res.end();
 }else{
    res.write(data);
    res.end();
 }
  });
    
});

server.listen(3000 , 'localhost',() => {
 console.log('listening for requests on port 3000');

})
 