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
exports.fetchZporeRemixes = void 0;
const ZporeDrops_1 = require("./ZporeDrops");
const ZDK_1 = require("./ZDK");
const TokenAttributes_1 = require("./TokenAttributes");
;
const fetchZporeRemixes = (songId, ownerAddress, limit = 100) => __awaiter(void 0, void 0, void 0, function* () {
    let drops = [];
    if (typeof songId === "undefined") {
        drops = yield (0, ZporeDrops_1.fetchZporeDrops)();
    }
    else {
        drops = [yield (0, ZporeDrops_1.fetchZporeDrop)(songId)];
    }
    let dropAddresses = drops.map(x => x.dropAddress);
    let hasNext = true;
    let entireResponse = [];
    let endCursor;
    while (hasNext && entireResponse.length < limit) {
        let pagination = {
            after: endCursor
        };
        let results = yield (0, ZDK_1.zdk)().tokens({
            where: {
                ownerAddresses: ownerAddress ? [ownerAddress] : undefined,
                collectionAddresses: dropAddresses,
            },
            includeFullDetails: true,
            pagination: pagination
        });
        let tokens = results.tokens.nodes.map(x => x.token);
        if (results.tokens.pageInfo.hasNextPage) {
            endCursor = results.tokens.pageInfo.endCursor;
            hasNext = true;
        }
        else {
            hasNext = false;
        }
        let remixes = tokens.map(x => (Object.assign(Object.assign({}, x), { metadata: x.metadata || (x.tokenUrl ? (0, ZDK_1.decodeTokenURI)(x.tokenUrl) : undefined) }))).map(x => ({
            name: x.name,
            songId: drops.find(drop => drop.dropAddress == x.collectionAddress).songId,
            tokenContract: {
                name: x.tokenContract.name
            },
            metadata: x.metadata,
            attributes: (0, TokenAttributes_1.getTokenAttributes)(x.metadata.attributes),
            tokenId: parseInt(x.tokenId),
            creator: x.mintInfo.toAddress,
            mintInfo: {
                toAddress: x.mintInfo.toAddress,
                mintContext: {
                    blockTimestamp: x.mintInfo.mintContext.blockTimestamp
                }
            },
        }));
        entireResponse = [...entireResponse, ...remixes];
    }
    if (ownerAddress) {
        entireResponse.sort((a, b) => new Date(a.mintInfo.mintContext.blockTimestamp).getTime() -
            new Date(b.mintInfo.mintContext.blockTimestamp).getTime());
    }
    return entireResponse;
});
exports.fetchZporeRemixes = fetchZporeRemixes;
