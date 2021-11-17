"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityAccess = void 0;
var accessToken = process.env.TOKEN_ACCESS || 'secret';
exports.securityAccess = {
    checkAccess: function (token) {
        return accessToken === token;
    },
};
