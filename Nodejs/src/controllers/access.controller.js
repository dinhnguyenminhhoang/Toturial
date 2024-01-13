"use strict";

const AccessService = require("../services/access.services");
const { CREATED } = require("../core/success.response");

class AccessController {
    singUp = async (req, res, next) => {
        new CREATED({
            message: "Register OK!",
            metadata: await AccessService.singUp(req.body),
            options: {
                limit: 10,
            },
        }).send(res);
    };
}
module.exports = new AccessController();
