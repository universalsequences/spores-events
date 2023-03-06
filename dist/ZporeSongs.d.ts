export interface SongMetadata {
    title: string;
    artist: string;
    songId: number;
    key: string;
    bpm: number;
    attributes?: SongAttributes;
    isHidden?: boolean;
}
declare type SongAttributes = {
    "crossfade-stems"?: boolean;
    "start-time"?: string;
    "hide-song"?: boolean;
};
export declare const fetchSongsMetadata: (songIds?: number[] | undefined, includeAttributes?: boolean | undefined) => Promise<SongMetadata[]>;
declare type SongToAttributes = {
    [key: string]: SongAttributes;
};
export declare const fetchSongAttributes: (songIds?: number[] | undefined) => Promise<SongToAttributes>;
export {};
