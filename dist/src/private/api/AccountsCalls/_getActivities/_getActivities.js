"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../../utils");
var routes_1 = require("../../../routes");
// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
exports._getActivities = function (credentials) {
    //
    return function (startTime) {
        //
        return function (endTime) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var accountGetApi, dateTime, endpoint, accountGet, activities, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        accountGetApi = routes_1._axiosAccountGetApi(credentials);
                        dateTime = utils_1.endpointFormatDateTool(startTime, endTime);
                        endpoint = "/activities?" + dateTime;
                        accountGet = accountGetApi(endpoint);
                        return [4 /*yield*/, accountGet()];
                    case 1:
                        activities = _a.sent();
                        //
                        return [2 /*return*/, activities.activities];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1.message);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
};
//# sourceMappingURL=_getActivities.js.map