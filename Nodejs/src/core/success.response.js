"use strict";

const STATUSCODE = {
    OK: 200,
    CREATED: 201,
};
const REASONSTATUSCODE = {
    CREATED: "created!",
    OK: "Success",
};
class SuccessResponse {
    constructor({
        message,
        statusCode = STATUSCODE.OK,
        reasonStatusCode = REASONSTATUSCODE.OK,
        metadata = {},
    }) {
        this.message = !message ? reasonStatusCode : message;
        this.status = statusCode;
        this.metadata = metadata;
    }
    send(res) {
        return res.status(this.status).json(this);
    }
}
class OK extends SuccessResponse {
    constructor({ message, metadata }) {
        super(message, metadata);
    }
}
class CREATED extends SuccessResponse {
    constructor({
        message,
        statusCode = STATUSCODE.CREATED,
        reasonStatusCode = REASONSTATUSCODE.CREATED,
        metadata,
        options,
    }) {
        super({ message, statusCode, reasonStatusCode, metadata });
        this.options = options;
    }
}
module.exports = { OK, CREATED };
