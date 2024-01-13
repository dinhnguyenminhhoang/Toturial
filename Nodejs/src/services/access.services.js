"use strict";

const shopModel = require("../models/shop.model");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const KeyTokenService = require("./keyToken.services");
const { createTokenPair } = require("../auth/authUtils");
const { getInfoData } = require("../utils");
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
                // áp dụng cho những hệ thống lớn
                // const { privateKey, publicKey } = crypto.generateKeyPairSync(
                //     "rsa",
                //     {
                //         modulusLength: 4096,
                //         publicKeyEncoding: { type: "pkcs1", format: "pem" },
                //         privateKeyEncoding: { type: "pkcs1", format: "pem" },
                //     }
                // );
                //rsa : thuật toán bất đôi dứng
                // áp dụng cho các hệ thông  nhỏ
                const publicKey = crypto.randomBytes(64).toString(`hex`);
                const privateKey = crypto.randomBytes(64).toString(`hex`);
                console.log({ privateKey, publicKey });
                const keyStore = await KeyTokenService.createKeyToken({
                    userId: newSHop._id,
                    publicKey: publicKey,
                    privateKey: privateKey,
                });
                if (!keyStore) {
                    return {
                        code: "xxxx",
                        message: "keyStore error",
                    };
                }

                // const publicKeyObject = crypto.createPublicKey(publicKeyString);
                // console.log(`publicKeyObject::`, publicKeyObject);

                //create token pair
                const tokens = await createTokenPair(
                    {
                        userId: newSHop._id,
                        email,
                    },
                    publicKey,
                    privateKey
                );
                console.log(`created token successfully::`, tokens);
                return {
                    code: 201,
                    metadata: {
                        shop: getInfoData({
                            fill: ["_id", "name", "email"],
                            object: newSHop,
                        }),
                        tokens,
                    },
                };
            }
            return {
                code: 200,
                metadata: null,
            };
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
