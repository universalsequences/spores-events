export {fetchZporeRemixes, ZporeRemix} from './ZporeRemixes';
export {fetchZporeDrop, fetchZporeDrops, ZporeDrop} from './ZporeDrops';
export {fetchSongAttributes, fetchSongsMetadata, SongMetadata} from './ZporeSongs';
export {EthereumQuery} from './EthereumQuery';
export {setZoraApiKey} from './ZDK'

export {
    NewSong,
    NewStem,
    NewStemType,
    NewDefaultSongConfiguration,
    SongConfigurationStem,
    ZporeDropCreated,
    SongAttribute,
    SongCreator
} from './EthereumEvents';
export {goerli} from './Contracts';

/*
const test = async () => {
    console.log((await fetchZporeRemixes(undefined, undefined, 100)).map(x => x.mintInfo.mintContext.blockTimestamp));
};


test();

*/
