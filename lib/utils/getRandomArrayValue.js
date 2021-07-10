"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomArrayValue = void 0;
var getRandomArrayValue = function (names) {
    return names[Math.floor(Math.random() * names.length)];
};
exports.getRandomArrayValue = getRandomArrayValue;
