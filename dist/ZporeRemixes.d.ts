declare type Address = string;
declare type BlockTimestamp = string;
export interface ZporeRemix {
    name: string | null;
    tokenId: number;
    songId: number;
    creator: Address;
    tokenContract: {
        name: string | null | undefined;
    };
    mintInfo: {
        toAddress: Address;
        mintContext: {
            blockTimestamp: BlockTimestamp;
        };
    };
    metadata?: any;
    attributes?: RemixAttributes;
}
export declare type RemixAttributes = {
    [field: string]: number | string;
};
export declare const fetchZporeRemixes: (songId?: number | undefined, ownerAddress?: string | undefined, limit?: number) => Promise<ZporeRemix[]>;
export {};
