"use strict";

const shopModel = require("../models/shop.model");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const RolesShop = {
    SHOP: "SHOP",
    WRITER: "WRITER",
    EDITTER: "EDITTER",
    ADMIN: "ADMIN",
};
class AccessService {
    static singUp = async ({ name, email, password }) => {
        try {
            //step 1 : check email exists
            const hodelShop = await shopModel.findOne({ email }).lean();
            if (hodelShop) {
                return {
                    code: "xxxx",
                    message: "shop already registered !",
                };
            }
            const passwordHash = await bcrypt.hash(password, 10);
            const newSHop = await shopModel.create({
                name,
                email,
                password: passwordHash,
                roles: [RolesShop.SHOP],
            });
            if (newSHop) {
                //create privateKey->find token,publicKey->verify token
                const { privateKey, publicKey } = crypto.generateKeyPairSync(
                    "rsa",
                    {
                        modulusLength: 4096,
                    }
                );
                //rsa : thuật toán bất đôi dứng
                console.log({ privateKey, publicKey });
            }
        } catch (error) {
            return {
                code: "xxx",
                message: error.message,
                status: "error",
            };
        }
    };
}
module.exports = AccessService;
