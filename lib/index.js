"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firstnames_1 = __importDefault(require("./constants/firstnames"));
var middlenames_1 = __importDefault(require("./constants/middlenames"));
var lastnames_1 = __importDefault(require("./constants/lastnames"));
var getRandomName = function (names) {
    return names[Math.floor(Math.random() * names.length)];
};
exports.default = (function () {
    return getRandomName(firstnames_1.default) + " " + getRandomName(middlenames_1.default) + " " + getRandomName(lastnames_1.default);
});
