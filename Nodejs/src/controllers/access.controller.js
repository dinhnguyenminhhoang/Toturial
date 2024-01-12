"use strict";

const AccessService = require("../services/access.services");

class AccessController {
    singUp = async (req, res, next) => {
        try {
            console.log(`[p]:::singUp`, req.body);
            /*
            200->oke
            201->CREATE
            */
            return res.status(201).json(await AccessService.singUp(req.body));
        } catch (error) {
            next(error);
        }
    };
}
module.exports = new AccessController();
