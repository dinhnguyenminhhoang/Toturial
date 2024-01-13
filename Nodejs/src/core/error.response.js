"use strict";
const STATUSCODE = {
    FORBIDEN: 403,
    CONFLICT: 409,
};
const REASONSTATUSCODE = {
    FORBIDEN: "bad request error",
    CONFLICT: "Conflict error",
};
class ErrorResponse extends Error {
    //kết thứa message và status của ER trong nodeJs
    constructor(message, status) {
        super(message);
        // truyền message vào Err của NODEJS
        this.status = status;
    }
}
class conflictRequestError extends ErrorResponse {
    constructor(
        message = REASONSTATUSCODE.CONFLICT,
        statusCode = STATUSCODE.FORBIDEN
    ) {
        super(message, statusCode);
    }
}
class badRequestError extends ErrorResponse {
    constructor(
        message = REASONSTATUSCODE.CONFLICT,
        statusCode = STATUSCODE.FORBIDEN
    ) {
        super(message, statusCode);
    }
}
module.exports = { conflictRequestError, badRequestError };
