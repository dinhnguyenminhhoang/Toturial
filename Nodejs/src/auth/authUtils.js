"use strict";
const JWT = require("jsonwebtoken");
const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        const accessToken = await JWT.sign(payload, privateKey, {
            algorithm: "RS256",
            expiresIn: "2 days",
        });
        const refreshToken = await JWT.sign(payload, privateKey, {
            algorithm: "RS256",
            expiresIn: "7 days",
        });
        //
        JWT.verify(accessToken, publicKey, (err, decode) => {
            if (err) {
                console.error(`error verifying::`, err);
            } else {
                console.log(`decode verification::`, decode);
            }
        });
        //
        return { accessToken, refreshToken };
    } catch (error) {}
};
module.exports = {
    createTokenPair,
};
