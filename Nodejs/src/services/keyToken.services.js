"use strict";

const keytokenModel = require("../models/keytoken.model");

class KeyTokenService {
    static createKeyToken = async ({ userId, publickey }) => {
        try {
            const publicKeyString = publickey.toString();
            const tokens = await keytokenModel.create({
                user: userId,
                publickey: publicKeyString,
            });
            return tokens ? publicKeyString : null;
        } catch (error) {
            return error;
        }
    };
}
module.exports = KeyTokenService;
