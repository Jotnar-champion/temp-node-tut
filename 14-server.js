const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request Event");
  res.end("Hello World");
});

server.listen(5000, () => {
  console.log("Server Listening on port : 5000 .....");
});
