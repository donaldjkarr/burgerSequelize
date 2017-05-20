var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
// var burger = require("../models/burger.js");

var db = require("../models/");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(db) {
        console.log(db);
        var hbsObject = { burger: db };
        return res.render("index", hbsObject);
      });
    });
  

// post route to create burgers
router.post("/burgers/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(db) {
    console.log(db);
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  // update one of the burgers
  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
