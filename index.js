const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 8080 || process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./pages/index.html", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, (err) => {
  if (err) {
    console.log("Something went wrong", err);
  }
  console.log("Server is listening on port " + port);
});
