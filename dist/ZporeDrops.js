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
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCache = exports.fetchZporeDrops = exports.fetchZporeDrop = void 0;
const EthereumEvents_1 = require("./EthereumEvents");
const EthereumQuery_1 = require("./EthereumQuery");
const Contracts_1 = require("./Contracts");
const fetchZporeDrop = (songId) => {
    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        let query = new EthereumQuery_1.EthereumQuery(Contracts_1.goerli.Stems)
            .from(EthereumEvents_1.ZporeDropCreated)
            .select("dropAddress")
            .select("songId")
            .where("songId", songId);
        let results = yield query.executeQuery();
        resolve({
            songId,
            dropAddress: results[0].dropAddress
        });
    }));
};
exports.fetchZporeDrop = fetchZporeDrop;
let fullCache;
const fetchZporeDrops = () => {
    if (fullCache) {
        return fullCache;
    }
    let promise = new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        let query = new EthereumQuery_1.EthereumQuery(Contracts_1.goerli.Stems)
            .from(EthereumEvents_1.ZporeDropCreated)
            .select("dropAddress")
            .select("songId");
        let results = yield query.executeQuery();
        resolve(results.map((x) => ({
            songId: x.songId,
            dropAddress: x.dropAddress
        })));
    }));
    fullCache = promise;
    return promise;
};
exports.fetchZporeDrops = fetchZporeDrops;
const clearCache = () => {
    fullCache = null;
};
exports.clearCache = clearCache;
