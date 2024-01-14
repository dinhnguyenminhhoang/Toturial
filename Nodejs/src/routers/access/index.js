"use strict";
const express = require("express");
const accessController = require("../../controllers/access.controller");
const { asynchandler } = require("../../auth/checkAuth");
const router = express.Router();

//

// signUp
router.post("/shop/signup", asynchandler(accessController.singUp));

//signIn
router.post("/shop/login", asynchandler(accessController.login));

module.exports = router;
