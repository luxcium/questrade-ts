"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getMarkets
/** _getMarkets */
exports._getMarkets = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, API_Request_AXIOS_1._axiosGetApi(credentials)('/markets')()];
        case 1: return [2 /*return*/, (_a.sent()).markets];
    }
}); }); }; };
//# sourceMappingURL=_getMarkets.js.map