const http = require("http");

//creating the basic server for
// /-> home page
// /about -> about page
// others will get the error page (404)

//headers are going to have metadata (data about the data in (req -> about the req message) & (res -> about the response we are building))

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>This is the home page</h1>`);
    //helps to end the communication , very helpful
    res.end();
  } else if (url === "/about") {
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
