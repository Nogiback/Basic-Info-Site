// Without Express
// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const PORT = 8080 || process.env.PORT;

// const page404 = fs.readFileSync("./pages/404.html", "utf-8", (err, data) => {
//   if (err) throw err;
//   return data;
// });

// const server = http.createServer((req, res) => {
//   const query = url.parse(req.url, true);
//   let filename = "";

//   if (query.pathname === "/") {
//     filename = "./pages/index.html";
//   } else {
//     filename = "./pages" + query.pathname + ".html";
//   }

//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.write(page404);
//       return res.end();
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     }
//   });
// });

// server.listen(PORT, (err) => {
//   if (err) {
//     console.log("Something went wrong", err);
//   }
//   console.log("Server is listening on port " + PORT);
// });

// With Express

const express = require("express");
const path = require("path");

const app = express();
const port = 8080 || process.env.PORT;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/contact.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/404.html"));
});

app.listen(port, function () {
  console.log(`Server started at http://localhost:${port}!`);
});
