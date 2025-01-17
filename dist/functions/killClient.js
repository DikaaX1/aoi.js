"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Return_1 = require("../structures/Return");
const createNativeFunction_1 = __importDefault(require("../util/functions/createNativeFunction"));
exports.default = (0, createNativeFunction_1.default)({
    name: '$killClient',
    description: 'Kill the Client. (destroy)',
    returns: 'STRING',
    execute: function () {
        return Return_1.Return.string(this.bot.client.destroy());
    }
});
//# sourceMappingURL=killClient.js.map