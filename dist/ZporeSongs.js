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
exports.fetchSongAttributes = exports.fetchSongsMetadata = void 0;
const EthereumEvents_1 = require("./EthereumEvents");
const EthereumQuery_1 = require("./EthereumQuery");
const Contracts_1 = require("./Contracts");
const fetchSongsMetadata = (songIds, includeAttributes) => __awaiter(void 0, void 0, void 0, function* () {
    let query = new EthereumQuery_1.EthereumQuery(Contracts_1.goerli.Stems)
        .from(EthereumEvents_1.NewSong)
        .select("title")
        .select("artist");
    if (songIds) {
        query = query.whereIn("songId", songIds);
    }
    let results = yield query.executeQuery();
    let payload = dedupeSongs(results).map((result) => ({
        title: result.title,
        artist: result.artist,
        songId: result.songId,
        bpm: result.bpm,
        key: result.key
    }));
    if (!includeAttributes) {
        return payload;
    }
    let songToAttributes = yield (0, exports.fetchSongAttributes)(songIds);
    return payload.map((p) => (Object.assign(Object.assign({}, p), { attributes: songToAttributes[p.songId], isHidden: songToAttributes[p.songId]["hide-song"] !== undefined &&
            songToAttributes[p.songId]["hide-song"] })));
});
exports.fetchSongsMetadata = fetchSongsMetadata;
const dedupeSongs = (results) => {
    let songIds = [];
    let _results = [];
    for (let result of results) {
        if (songIds.includes(result.songId)) {
            continue;
        }
        _results.push(result);
        songIds.push(result.songId);
    }
    return _results;
};
const fetchSongAttributes = (songIds) => __awaiter(void 0, void 0, void 0, function* () {
    let query = new EthereumQuery_1.EthereumQuery(Contracts_1.goerli.Stems)
        .from(EthereumEvents_1.SongAttribute);
    if (songIds) {
        query = query.whereIn("songId", songIds);
    }
    let results = yield query.executeQuery();
    let songToAttributes = {};
    for (let result of results) {
        let { songId, attributeType, attributeValue, blockNumber } = result;
        let booleanValue = true;
        if (attributeValue === '\x01') {
            booleanValue = true;
        }
        else if (attributeValue === '\x00') {
            booleanValue = false;
        }
        else if (attributeValue === null) {
            booleanValue = false;
        }
        if (!(songId in songToAttributes)) {
            songToAttributes[songId] = {};
        }
        if (attributeType in songToAttributes[songId]) {
            // skip if it exists
            continue;
        }
        if (attributeType === "crossfade-stems") {
            songToAttributes[songId]["crossfade-stems"] = booleanValue;
        }
        else if (attributeType === "hide-song") {
            songToAttributes[songId]["hide-song"] = booleanValue;
        }
        else {
            songToAttributes[songId]["start-time"] = attributeValue;
        }
    }
    return songToAttributes;
});
exports.fetchSongAttributes = fetchSongAttributes;
