"use strict";

const mongoose = require("mongoose");
const connectString = `mongodb+srv://dinhnguyenminhhoang28:wHzSvwMWQbJhpdAT@cluster0.iijb7s0.mongodb.net/`;
const { countConnect } = require("../helpers/check.connect");
class Database {
    constructor() {
        this.connect();
    }
    //connect
    connect(type = "mongodb") {
        //dev
        if (1 === 1) {
            mongoose.set("debug", true);
            mongoose.set("debug", { color: true });
        }
        mongoose
            .connect(connectString, { maxPoolSize: 50 })
            .then((_) =>
                console.log("connected MongoDb successfully", countConnect())
            )
            .catch((err) => console.log("error connecting"));
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
