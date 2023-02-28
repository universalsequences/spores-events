"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeTokenURI = exports.zdk = void 0;
const zdk_1 = require("@zoralabs/zdk");
const networkInfo = {
    network: zdk_1.ZDKNetwork.Ethereum,
    chain: zdk_1.ZDKChain.Goerli,
};
const API_ENDPOINT = "https://api.zora.co/graphql";
const args = {
    endPoint: API_ENDPOINT,
    networks: [networkInfo],
};
exports.zdk = new zdk_1.ZDK(args); // All arguments are optional
const decodeTokenURI = (uri) => {
    let starter = 'base64,';
    if (uri.indexOf(starter) >= 0) {
        let str = atob(uri.slice(uri.indexOf(starter) + starter.length));
        return JSON.parse(str);
    }
    return "";
};
exports.decodeTokenURI = decodeTokenURI;
