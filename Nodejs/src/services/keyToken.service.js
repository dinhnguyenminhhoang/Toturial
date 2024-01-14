"use strict";
const keytokenModel = require("../models/keytoken.model");

class KeyTokenService {
    static createKeyToken = async ({
        userId,
        publicKey,
        privateKey,
        refreshToken,
    }) => {
        try {
            //lv0
            // const tokens = await keytokenModel.create({
            //     user: userId,
            //     publicKey: publicKey,
            //     privateKey: privateKey,
            // });
            // return tokens ? tokens.publicKey : null;

            //lv xx
            const fill = { user: userId },
                update = {
                    publicKey,
                    privateKey,
                    refreshTokenUsed: [],
                    refreshToken,
                },
                options = { upsert: true, new: true };
            const tokens = await keytokenModel.findOneAndUpdate(
                fill,
                update,
                options
            );
            return tokens ? tokens.publicKey : null;
        } catch (error) {
            return error;
        }
    };
}
module.exports = KeyTokenService;
