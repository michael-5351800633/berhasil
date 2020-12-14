const express = require("express");
const router = express.Router();

const { ensureAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.render("homepage"));

router.get("/login", ensureAuthenticated, (req, res) => res.render("login"));
router.get("/register", ensureAuthenticated, (req, res) => res.render("register"));
router.get("/foodnews", ensureAuthenticated,(req, res) => res.render("foodnews"));
router.get("/asianrecipe", ensureAuthenticated, (req, res) => res.render("asiancuisine"));
router.get("/westernrecipe",ensureAuthenticated, (req, res) => res.render("westerncuisine"));
router.get("/indonesianrecipe",ensureAuthenticated, (req, res) => res.render("indonesiancuisine"));
router.get("/vegetarianrecipe",ensureAuthenticated, (req, res) => res.render("vegetarianrecipe"));
router.get("/dessertrecipe",ensureAuthenticated, (req, res) => res.render("dessertrecipe"));
router.get("/apptizerecipe",ensureAuthenticated, (req, res) => res.render("apptizerecipe"));
router.get("/about",ensureAuthenticated, (req, res) => res.render("about"));

//dasboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name,
  })
);

router.get("/foodnews", ensureAuthenticated, (req, res) =>
  res.render("foodnews", {
    name: req.user.name,
  })
);

router.get("/about", ensureAuthenticated, (req, res) =>
  res.render("about", {
    name: req.user.name,
  })
);



module.exports = router;
