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
}
export declare const fetchZporeRemixes: (songId?: number | undefined, ownerAddress?: string | undefined, limit?: number) => Promise<ZporeRemix[]>;
export {};
