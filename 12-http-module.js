const http = require("http");

var server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home page");
  } else if (req.url === "/about") {
    //BLOCKING CODE!!!
    for(let i = 0; i<400;i++)
    {
        for(let j = 0;j <400;j++)
        {
            console.log(`${i} + ${j}`);
        }
    }
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
