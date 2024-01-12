const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = 8080 || process.env.PORT;

const page404 = fs.readFileSync("./pages/404.html", "utf-8", (err, data) => {
  if (err) throw err;
  return data;
});

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true);
  let filename = "";

  if (query.pathname === "/") {
    filename = "./pages/index.html";
  } else {
    filename = "./pages" + query.pathname + ".html";
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(page404);
      return res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("Something went wrong", err);
  }
  console.log("Server is listening on port " + PORT);
});
