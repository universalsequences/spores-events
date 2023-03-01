export {fetchZporeRemixes, ZporeRemix} from './ZporeRemixes';
export {fetchZporeDrop, fetchZporeDrops, ZporeDrop} from './ZporeDrops';
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

import { fetchZporeRemixes } from './ZporeRemixes';

/*
const test = async () => {
    console.log((await fetchZporeRemixes(undefined, undefined, 100)).map(x => x.mintInfo.mintContext.blockTimestamp));
};


test();

*/
