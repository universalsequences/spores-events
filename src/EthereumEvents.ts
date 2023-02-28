import {
    EthereumTopic,
    EthereumEventLog,
} from './EthereumDataType'

export const SongCreator: EthereumEventLog = {
    event: "SongCreator(uint256,address)",
    topics: [
        new EthereumTopic('songId', "uint256"),
        new EthereumTopic('creator', "address")
    ],
    data: []
};


export const NewSong: EthereumEventLog = {
    event: "NewSong(uint256,string,string,int16,int16,string)",
    topics: [],
    data: [
        new EthereumTopic("songId", "uint256"),
        new EthereumTopic("title", "string"),
        new EthereumTopic("artist", "string"),
        new EthereumTopic("bpm", "int16"),
        new EthereumTopic("bpmDecimal", "int16"),
        new EthereumTopic("key", "string"),
    ]
}

export const NewStem: EthereumEventLog = {
    event: "NewStem(uint256,uint256,string,uint16,bool)",
    topics: [],
    data: [
        new EthereumTopic("songId", "uint256"),
        new EthereumTopic("stemId", "uint256"),
        new EthereumTopic("uri", "string"),
        new EthereumTopic("duration", "uint256"),
        new EthereumTopic("isLoop", "bool"),
    ]
};

export const NewDefaultSongConfiguration: EthereumEventLog = {
    event: "NewDefaultSongConfiguration(uint256,uint256)",
    topics: [],
    data: [
        new EthereumTopic("songId", "uint256"),
        new EthereumTopic("configId", "uint256"),
    ]
};

export const SongConfigurationStem: EthereumEventLog = {
    event: "SongConfigurationStem(uint256,uint256)",
    topics: [],
    data: [
        new EthereumTopic("configId", "uint256"),
        new EthereumTopic("stemId", "uint256"),
    ]
};

export const NewStemType: EthereumEventLog= {
    event: "NewStemType(uint256,uint8)",
    topics: [],
    data: [
        new EthereumTopic("stemId", "uint256"),
        new EthereumTopic("stemType", "uint256"),
    ]
};

export const StemDeleted: EthereumEventLog = {
    event: "StemDeleted(uint256)",
    topics: [
        new EthereumTopic("stemId", "uint256"),
    ],
    data: []
};

export const SongDeleted: EthereumEventLog = {
    event: "SongDeleted(uint256)",
    topics: [
        new EthereumTopic("songId", "uint256"),
    ],
    data: []
};

export const StemAttribute: EthereumEventLog = {
    event: "StemAttribute(uint256,bytes32,bytes32)",
    topics: [
        new EthereumTopic("stemId", "uint256"),
        new EthereumTopic("attributeType", "bytes32"),
        new EthereumTopic("attributeValue", "bytes32"),
    ],
    data: []
};

export const SongAttribute: EthereumEventLog = {
    event: "SongAttribute(uint256,bytes32,bytes32)",
    topics: [
        new EthereumTopic("songId", "uint256"),
        new EthereumTopic("attributeType", "bytes32"),
        new EthereumTopic("attributeValue", "bytes32"),
    ],
    data: []
};

export const ZporeDropCreated: EthereumEventLog = {
    event: "NewDropCreated(uint256,address)",
    topics: [],
    data: [
        new EthereumTopic("songId", "uint256"),
        new EthereumTopic("dropAddress", "address")
    ]
};

