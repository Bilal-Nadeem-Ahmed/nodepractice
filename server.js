const http = require("http");
const fs = require("fs");
const _=require('lodash')
const server = http.createServer((req, res) => {
 //lodash the .random will give us a random number between the two specified values
 const num = _.random(0,20);
 console.log(num);
 //the once method will only ever allow the function to be called once. nomatter how many times it is called.
 //you put the function inside it like so:
 const greet=_.once(()=>console.log('hello world'))
 greet()
 greet()
  // set header content type.
  res.setHeader("Content-Type", "text/html");
  // set an html file

  // the path as the files are in the views folder
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(data);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
//Node.js Crash Course Tutorial #5 - NPM
