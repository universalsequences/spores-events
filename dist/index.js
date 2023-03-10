"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goerli = exports.SongCreator = exports.SongAttribute = exports.ZporeDropCreated = exports.SongConfigurationStem = exports.NewDefaultSongConfiguration = exports.NewStemType = exports.NewStem = exports.NewSong = exports.setZoraApiKey = exports.EthereumQuery = exports.fetchSongsMetadata = exports.fetchSongAttributes = exports.fetchZporeDrops = exports.fetchZporeDrop = exports.fetchZporeRemixes = void 0;
var ZporeRemixes_1 = require("./ZporeRemixes");
Object.defineProperty(exports, "fetchZporeRemixes", { enumerable: true, get: function () { return ZporeRemixes_1.fetchZporeRemixes; } });
var ZporeDrops_1 = require("./ZporeDrops");
Object.defineProperty(exports, "fetchZporeDrop", { enumerable: true, get: function () { return ZporeDrops_1.fetchZporeDrop; } });
Object.defineProperty(exports, "fetchZporeDrops", { enumerable: true, get: function () { return ZporeDrops_1.fetchZporeDrops; } });
var ZporeSongs_1 = require("./ZporeSongs");
Object.defineProperty(exports, "fetchSongAttributes", { enumerable: true, get: function () { return ZporeSongs_1.fetchSongAttributes; } });
Object.defineProperty(exports, "fetchSongsMetadata", { enumerable: true, get: function () { return ZporeSongs_1.fetchSongsMetadata; } });
var EthereumQuery_1 = require("./EthereumQuery");
Object.defineProperty(exports, "EthereumQuery", { enumerable: true, get: function () { return EthereumQuery_1.EthereumQuery; } });
var ZDK_1 = require("./ZDK");
Object.defineProperty(exports, "setZoraApiKey", { enumerable: true, get: function () { return ZDK_1.setZoraApiKey; } });
var EthereumEvents_1 = require("./EthereumEvents");
Object.defineProperty(exports, "NewSong", { enumerable: true, get: function () { return EthereumEvents_1.NewSong; } });
Object.defineProperty(exports, "NewStem", { enumerable: true, get: function () { return EthereumEvents_1.NewStem; } });
Object.defineProperty(exports, "NewStemType", { enumerable: true, get: function () { return EthereumEvents_1.NewStemType; } });
Object.defineProperty(exports, "NewDefaultSongConfiguration", { enumerable: true, get: function () { return EthereumEvents_1.NewDefaultSongConfiguration; } });
Object.defineProperty(exports, "SongConfigurationStem", { enumerable: true, get: function () { return EthereumEvents_1.SongConfigurationStem; } });
Object.defineProperty(exports, "ZporeDropCreated", { enumerable: true, get: function () { return EthereumEvents_1.ZporeDropCreated; } });
Object.defineProperty(exports, "SongAttribute", { enumerable: true, get: function () { return EthereumEvents_1.SongAttribute; } });
Object.defineProperty(exports, "SongCreator", { enumerable: true, get: function () { return EthereumEvents_1.SongCreator; } });
var Contracts_1 = require("./Contracts");
Object.defineProperty(exports, "goerli", { enumerable: true, get: function () { return Contracts_1.goerli; } });
/*
const test = async () => {
    console.log((await fetchZporeRemixes(undefined, undefined, 100)).map(x => x.mintInfo.mintContext.blockTimestamp));
};


test();

*/
