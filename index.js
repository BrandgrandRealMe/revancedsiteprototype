const express = require("express");
const app = express();
const fs = require('fs');
app.use(express.static("public"));

// Defaults 
app.get("/file/default.css", (request, response) => {
  response.sendFile(__dirname + "/defaults/default.css");
});

// Home
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/home/home.html");
});
app.get("/file/home.css", (request, response) => {
  response.sendFile(__dirname + "/pages/home/home.css");
});
app.get("/file/home.js", (request, response) => {
  response.sendFile(__dirname + "/pages/home/home.js");
});

// Home
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/pages/about/about.html");
});
app.get("/file/about.css", (request, response) => {
  response.sendFile(__dirname + "/pages/about/about.css");
});
app.get("/file/about.js", (request, response) => {
  response.sendFile(__dirname + "/pages/about/about.js");
});



// license
app.get("/license", (request, response) => {
  response.sendFile(__dirname + "/pages/license/license.html");
});
app.get("/file/license.css", (request, response) => {
  response.sendFile(__dirname + "/pages/license/license.css");
});

// File Stuff
app.get('/favicon/:fname', (req, res) => {
 if (!fs.readFileSync('./favicon/' + req.params.fname)) r404(res)
 else
  res.sendFile(__dirname + '/favicon/' + req.params.fname);
});
app.get('/public/:fname', (req, res) => {
 if (!fs.readFileSync('./public/' + req.params.fname)) r404(res)
 else
  res.sendFile(__dirname + '/public/' + req.params.fname);
});
app.get('/file/logo/:fname', (req, res) => {
 if (!fs.readFileSync('./logos/' + req.params.fname)) r404(res)
 else
  res.sendFile(__dirname + '/logos/' + req.params.fname);
});
app.get('/fonts/:fname', (req, res) => {
 if (!fs.readFileSync('./fonts/' + req.params.fname)) r404(res)
 else
  res.sendFile(__dirname + '/fonts/' + req.params.fname);
});



// 404
app.get("/file/404.css", (request, response) => {
  response.sendFile(__dirname + "/pages/404/404.css");
});
app.get("/file/404.js", (request, response) => {
  response.sendFile(__dirname + "/pages/404/404.js");
});
app.get('*', function(req, res){
  res.sendFile(__dirname + '/pages/404/404.html');
});

const listener = app.listen(process.env.PORT, () => {

});