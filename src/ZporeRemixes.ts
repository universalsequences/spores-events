import {fetchZporeDrop, ZporeDrop, fetchZporeDrops} from './ZporeDrops'
import {zdk, decodeTokenURI} from './ZDK';
import {getTokenAttributes} from './TokenAttributes'

type Address = string;
type BlockTimestamp = string;

export interface ZporeRemix {
    name: string | null;
    tokenId: number;
    songId: number;
    creator: Address;
    tokenContract: {
        name: string | null | undefined,
    }
    mintInfo: {
        toAddress: Address,
        mintContext: {
            blockTimestamp: BlockTimestamp;
        }
    }
    metadata?: any
};

export const fetchZporeRemixes = async (songId?: number, ownerAddress?: Address): Promise<ZporeRemix[]> => {
    let drops: ZporeDrop [] = [];
    if (typeof songId === "undefined") {
        drops = await fetchZporeDrops();
    } else {
        drops = [await fetchZporeDrop(songId!)];
    }

    let dropAddresses: string [] = drops.map(x => x.dropAddress);
    let results = await zdk.tokens({
        where: {
            ownerAddresses: ownerAddress ? [ownerAddress!] : undefined,
            collectionAddresses: dropAddresses,
        },
        includeFullDetails: true});

    let tokens = results.tokens.nodes.map(x => x.token);

    let remixes: ZporeRemix[] = tokens.map(
        x => ({
            ...x ,
            metadata: x.metadata || (x.tokenUrl ? decodeTokenURI(x.tokenUrl) : undefined),
        })).map(
        x => ({
            name: x.name!,
            songId: drops.find(
                drop =>
                    drop.dropAddress == x.collectionAddress)!.songId,
            tokenContract: {
                name: x.tokenContract!.name
            },
            metadata: x.metadata,
            attributes: getTokenAttributes(x.metadata!.attributes),
            tokenId: parseInt(x.tokenId),
            creator: x.mintInfo!.toAddress,
            mintInfo: {
                toAddress: x.mintInfo!.toAddress,
                mintContext: {
                    blockTimestamp: x.mintInfo!.mintContext.blockTimestamp
                }
            },
        }));

    if (ownerAddress) {
        remixes.sort((a: ZporeRemix,b: ZporeRemix) =>
            new Date(a.mintInfo.mintContext.blockTimestamp).getTime() - 
            new Date(b.mintInfo.mintContext.blockTimestamp).getTime());
    }

    return remixes;
}


