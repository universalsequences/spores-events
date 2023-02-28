export interface ZporeDrop {
    songId: number;
    dropAddress: string;
}
export declare const fetchZporeDrop: (songId: number) => Promise<ZporeDrop>;
export declare const fetchZporeDrops: () => Promise<ZporeDrop[]>;
export declare const clearCache: () => void;
