import {ZporeDropCreated} from './EthereumEvents';
import {EthereumQuery} from './EthereumQuery';
import {goerli} from './Contracts';

export interface ZporeDrop {
    songId: number;
    dropAddress: string;
}

export const fetchZporeDrop = (songId: number): Promise<ZporeDrop> => {
    return new Promise<ZporeDrop>(async (resolve) => {
        let query = new EthereumQuery(goerli.Stems)
            .from(ZporeDropCreated)
            .select("dropAddress")
            .select("songId")
            .where("songId", songId);
        let results = await query.executeQuery();
        resolve({
            songId,
            dropAddress: results[0].dropAddress
        });
    });
}

let fullCache: Promise<ZporeDrop[]> | null;

export const fetchZporeDrops = (): Promise<ZporeDrop[]> => {
    if (fullCache) {
        return fullCache;
    }
    let promise = new Promise<ZporeDrop[]>(async (resolve: (x: ZporeDrop[]) => void) => {
        let query = new EthereumQuery(goerli.Stems)
            .from(ZporeDropCreated)
            .select("dropAddress")
            .select("songId");
        let results = await query.executeQuery();
        resolve(results.map(
            (x: any) => ({
                songId: x.songId,
                dropAddress: x.dropAddress
            })));
    });
    fullCache = promise;
    return promise;
}

export const clearCache = () => {
    fullCache = null;
};


