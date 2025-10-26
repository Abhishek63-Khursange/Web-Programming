// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello Abhishek! Welcome to Node.js Server 🚀");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
