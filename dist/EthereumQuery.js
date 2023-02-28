"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthereumQuery = void 0;
const axios_1 = __importDefault(require("axios"));
class EthereumQuery {
    constructor(address) {
        this.address = address;
        this.selectStatements = [];
        this.whereClauses = [];
        this.fromBlockNumber = 0;
        this.distinct = false;
        this.joinClauses = [];
        this.groupBy = [];
    }
    from(eventLog) {
        this.eventLog = eventLog.event;
        return this;
    }
    select(field) {
        this.selectStatements.push(field);
        return this;
    }
    where(name, value) {
        this.whereClauses.push({
            name,
            value,
            valueList: []
        });
        return this;
    }
    whereIn(name, valueList) {
        this.whereClauses.push({
            name,
            value: 0,
            valueList,
        });
        return this;
    }
    executeQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = "https://zequencer.io/search";
            let resp = yield axios_1.default.post(url, JSON.stringify(this));
            return resp.data || [];
        });
    }
}
exports.EthereumQuery = EthereumQuery;
