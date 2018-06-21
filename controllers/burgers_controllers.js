// References to Express/Router
var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

// Route to index
router.get('/', function (req, res) {
  burger.all(function(burger_data){
      console.log(burger_data);
      res.render("index",{burger_data});
  })
})

// Route to update burgers
router.put("/burgers/update",function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect("/");
  });
});

// Route to creating new bugers
router.post("/burgers/create", function(req, res){
  burger.create(req.body.burger_name, function(result){
    res.redirect("/");
  })
})

//Export routes
module.exports = router;