"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeNames = void 0;
var mergeNames = function (originals, replacements, mixins) {
    if (replacements)
        return replacements;
    if (mixins)
        return __spreadArray(__spreadArray([], originals), mixins);
    return originals;
};
exports.mergeNames = mergeNames;
