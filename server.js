// Required NPM modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Pulls content for app from "public" folder
app.use(express.static(__dirname + "/public"));

// Parse Application
app.use(bodyParser.urlencoded({
    extended: false
}))

// Method Override
app.use(methodOverride("_method"));

// Handlebars
app.engine("handlebars",exphbs({
    defaultLayout: "main"
}));
app.set("view engine","handlebars");

// Route to burgers_controllers
var routes = require("./controllers/burgers_controllers.js");
app.use("/",routes);

var port = 3000;
app.listen(port);