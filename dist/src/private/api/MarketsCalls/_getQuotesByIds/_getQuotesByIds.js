"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routes_1 = require("../../../routes");
// + _getQuotesByID
/** _getQuotesFromSymbolID */
exports._getQuotesByIds = function (credentials) { return function (ids) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosGetApi(credentials)("/markets/quotes?ids=" + ids.join(','))()];
            case 1: return [2 /*return*/, (_a.sent()).quotes];
            case 2:
                error_1 = _a.sent();
                console.error(error_1.message);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=_getQuotesByIds.js.map