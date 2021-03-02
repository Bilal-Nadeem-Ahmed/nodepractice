const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set header content type.
  res.setHeader("Content-Type", "text/html");
  // set data to be sent back
  res.write("<p>hello this is the data</p>");
  res.write("<p>hello this is also the data</p>");
  // instruct for response to go back.
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
