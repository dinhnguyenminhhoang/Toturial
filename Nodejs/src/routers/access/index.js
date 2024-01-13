"use strict";
const express = require("express");
const accessController = require("../../controllers/access.controller");
const { asynchandler } = require("../../auth/checkAuth");
const router = express.Router();

//

// signUp
router.post("/shop/signup", asynchandler(accessController.singUp));

module.exports = router;
