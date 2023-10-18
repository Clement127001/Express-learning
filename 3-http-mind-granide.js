const http = require("http");
const { readFileSync } = require("fs");

//when we are doing the server side stuufs with the http we are going to make the code for decades for loading all the resources and creat the route for each resource.

//including the resource, we have to follow the below steps
//1 -> read the file from the file system
//2 -> load the resources to the browser

//step 1

const htmlPage = readFileSync("./navbar-app/index.html");
const htmlStyle = readFileSync("./navbar-app/styles.css");
const Logo = readFileSync("./navbar-app/logo.svg");
const htmlLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  //step 2
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(htmlPage);
    //helps to end the communication , very helpful
    res.end();
  }
  //css
  else if (url === "/styles.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.write(htmlStyle);
    res.end();
  }

  //js
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-type": "text/javascript" });
    res.write(htmlLogic);
    res.end();
  }

  //logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-type": "image/svg+xml" });
    res.write(Logo);
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(`<h1>This is the about page</h1>`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Page not found</h1>`);
    res.end();
  }
});

server.listen(3000);

//therefore if we are having about 100pages then work needed to setup the server with help of plain http module going to take decade
