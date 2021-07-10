"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firstnames_1 = __importDefault(require("./constants/firstnames"));
var middlenames_1 = __importDefault(require("./constants/middlenames"));
var lastnames_1 = __importDefault(require("./constants/lastnames"));
var utils_1 = require("./utils");
var getRandomName = function (fn, mn, ln) {
    return utils_1.getRandomArrayValue(fn) + " " + utils_1.getRandomArrayValue(mn) + " " + utils_1.getRandomArrayValue(ln);
};
var main = function (_a) {
    var _b = _a.numberOfNames, numberOfNames = _b === void 0 ? 1 : _b, _c = _a.mix, mix = _c === void 0 ? undefined : _c, _d = _a.replace, replace = _d === void 0 ? undefined : _d;
    var result = [];
    var fn = utils_1.mergeNames(firstnames_1.default, replace === null || replace === void 0 ? void 0 : replace.firstnames, mix === null || mix === void 0 ? void 0 : mix.firstnames);
    var mn = utils_1.mergeNames(middlenames_1.default, replace === null || replace === void 0 ? void 0 : replace.middlenames, mix === null || mix === void 0 ? void 0 : mix.middlenames);
    var ln = utils_1.mergeNames(lastnames_1.default, replace === null || replace === void 0 ? void 0 : replace.lastnames, mix === null || mix === void 0 ? void 0 : mix.lastnames);
    for (var i = 0; i < numberOfNames; i++) {
        result.push(getRandomName(fn, mn, ln));
    }
    if (result.length === 1)
        return result[0];
    return result;
};
exports.default = main;
