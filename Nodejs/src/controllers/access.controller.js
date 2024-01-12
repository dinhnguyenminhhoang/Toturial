"use strict";
class AccessController {
    singUp = async (req, res, next) => {
        try {
            console.log(`[p]:::singUp`, req.body);
            /*
            200->oke
            201->CREATE
            */
            return res.status(201).json({
                code: "2001",
                metadata: { userId: 1 },
            });
        } catch (error) {
            next(error);
        }
    };
}
module.exports = new AccessController();
