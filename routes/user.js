const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middelware.js");
const userController = require("../controllers/users.js");

router.route("/signup").get( userController.renderSignupFrom).post( wrapAsync(userController.signup));

router.route("/login").get( userController.renderLoginForm).post( saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true}), userController.login);

router.get("/logout", userController.logout);

module.exports = router;