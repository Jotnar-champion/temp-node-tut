const http = require("http");

var server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home page");
  } else if (req.url === "/about") {
    res.end("Here is a little info about us");
  } else {
    res.end(`
  <h1>OOPS!</h1>
  <p>404 Resources missing</p>
  <a href = "/">back Home</a>
  `);
  }
});

server.listen(5000);
