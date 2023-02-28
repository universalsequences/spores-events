"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZporeDropCreated = exports.SongAttribute = exports.StemAttribute = exports.SongDeleted = exports.StemDeleted = exports.NewStemType = exports.SongConfigurationStem = exports.NewDefaultSongConfiguration = exports.NewStem = exports.NewSong = exports.SongCreator = void 0;
const EthereumDataType_1 = require("./EthereumDataType");
exports.SongCreator = {
    event: "SongCreator(uint256,address)",
    topics: [
        new EthereumDataType_1.EthereumTopic('songId', "uint256"),
        new EthereumDataType_1.EthereumTopic('creator', "address")
    ],
    data: []
};
exports.NewSong = {
    event: "NewSong(uint256,string,string,int16,int16,string)",
    topics: [],
    data: [
        new EthereumDataType_1.EthereumTopic("songId", "uint256"),
        new EthereumDataType_1.EthereumTopic("title", "string"),
        new EthereumDataType_1.EthereumTopic("artist", "string"),
        new EthereumDataType_1.EthereumTopic("bpm", "int16"),
        new EthereumDataType_1.EthereumTopic("bpmDecimal", "int16"),
        new EthereumDataType_1.EthereumTopic("key", "string"),
    ]
};
exports.NewStem = {
    event: "NewStem(uint256,uint256,string,uint16,bool)",
    topics: [],
    data: [
        new EthereumDataType_1.EthereumTopic("songId", "uint256"),
        new EthereumDataType_1.EthereumTopic("stemId", "uint256"),
        new EthereumDataType_1.EthereumTopic("uri", "string"),
        new EthereumDataType_1.EthereumTopic("duration", "uint256"),
        new EthereumDataType_1.EthereumTopic("isLoop", "bool"),
    ]
};
exports.NewDefaultSongConfiguration = {
    event: "NewDefaultSongConfiguration(uint256,uint256)",
    topics: [],
    data: [
        new EthereumDataType_1.EthereumTopic("songId", "uint256"),
        new EthereumDataType_1.EthereumTopic("configId", "uint256"),
    ]
};
exports.SongConfigurationStem = {
    event: "SongConfigurationStem(uint256,uint256)",
    topics: [],
    data: [
        new EthereumDataType_1.EthereumTopic("configId", "uint256"),
        new EthereumDataType_1.EthereumTopic("stemId", "uint256"),
    ]
};
exports.NewStemType = {
    event: "NewStemType(uint256,uint8)",
    topics: [],
    data: [
        new EthereumDataType_1.EthereumTopic("stemId", "uint256"),
        new EthereumDataType_1.EthereumTopic("stemType", "uint256"),
    ]
};
exports.StemDeleted = {
    event: "StemDeleted(uint256)",
    topics: [
        new EthereumDataType_1.EthereumTopic("stemId", "uint256"),
    ],
    data: []
};
exports.SongDeleted = {
    event: "SongDeleted(uint256)",
    topics: [
        new EthereumDataType_1.EthereumTopic("songId", "uint256"),
    ],
    data: []
};
exports.StemAttribute = {
    event: "StemAttribute(uint256,bytes32,bytes32)",
    topics: [
        new EthereumDataType_1.EthereumTopic("stemId", "uint256"),
        new EthereumDataType_1.EthereumTopic("attributeType", "bytes32"),
        new EthereumDataType_1.EthereumTopic("attributeValue", "bytes32"),
    ],
    data: []
};
exports.SongAttribute = {
    event: "SongAttribute(uint256,bytes32,bytes32)",
    topics: [
        new EthereumDataType_1.EthereumTopic("songId", "uint256"),
        new EthereumDataType_1.EthereumTopic("attributeType", "bytes32"),
        new EthereumDataType_1.EthereumTopic("attributeValue", "bytes32"),
    ],
    data: []
};
exports.ZporeDropCreated = {
    event: "NewDropCreated(uint256,address)",
    topics: [],
    data: [
        new EthereumDataType_1.EthereumTopic("songId", "uint256"),
        new EthereumDataType_1.EthereumTopic("dropAddress", "address")
    ]
};
