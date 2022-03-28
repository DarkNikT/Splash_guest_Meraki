// Node JS development web server

var express = require("express");
var app = express();

// Express Midleware  - BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// serve static public site files
app.use(express.static('public'));

// app.get("/", function(req, res) {
//   res.sendfile('public/loginInvitado.html')
// });

/* Página de ingreso invitados*/
app.get("/logininvitado", function(req, res) {
   res.sendfile('public/loginInvitado.html')
});

/* Página de ingreso profesores*/
app.get("/loginestudiante", function(req, res) {
   res.sendfile('public/loginEstudiante.html')
});

/* Página de ingreso profesores*/
app.get("/loginprofesor", function(req, res) {
  res.sendfile('public/loginProfesor.html')
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
