import { NewSong, SongAttribute } from './EthereumEvents'
import {EthereumQuery} from './EthereumQuery'
import { goerli } from './Contracts'

export interface SongMetadata {
    title: string;
    artist: string;
    songId: number;
    key: string;
    bpm: number,
    attributes?: SongAttributes;
    isHidden?: boolean;
}

type SongAttributes = {
    "crossfade-stems"?: boolean;
    "start-time"?: string;
    "hide-song"?: boolean;
};

export const fetchSongsMetadata = async (
    songIds?: number[],
    includeAttributes?: boolean
): Promise<SongMetadata[]> => {
    let query = new EthereumQuery(goerli.Stems)
        .from(NewSong)
        .select("title")
        .select("artist")

    if (songIds) {
        query = query.whereIn("songId", songIds);
    }

    let results = await query.executeQuery();

    let payload = dedupeSongs(results).map(
        (result: any) => ({
            title: result.title,
            artist: result.artist,
            songId: result.songId,
            bpm: result.bpm,
            key: result.key
        }));

    if (!includeAttributes) {
        return payload;
    }

    let songToAttributes: SongToAttributes = await fetchSongAttributes(songIds!);
    return payload.map(
        (p: SongMetadata) => ({
            ...p,
            attributes: songToAttributes[p.songId!],
            isHidden: songToAttributes[p.songId!]["hide-song"] !== undefined &&
                songToAttributes[p.songId!]["hide-song"]! as boolean
        }));
}

const dedupeSongs = (results: any[]): any[] => {
    let songIds: number[] = [];
    let _results: any[] = [];
    for (let result of results) {
        if (songIds.includes(result.songId)) {
            continue;
        }
        _results.push(result);
        songIds.push(result.songId as number);
    }
    return _results;
};

type SongToAttributes = {
    [key: string]: SongAttributes
};

export const fetchSongAttributes = async (
    songIds?: number[]
): Promise<SongToAttributes> => {
    let query = new EthereumQuery(goerli.Stems)
        .from(SongAttribute);
    if (songIds) {
        query = query.whereIn("songId", songIds);
    }

    let results = await query.executeQuery();
    let songToAttributes: SongToAttributes = {};

    for (let result of results) {
        let { songId, attributeType, attributeValue, blockNumber } = result;
        let booleanValue: boolean = true;
        if (attributeValue === '\x01') {
            booleanValue = true;
        } else if (attributeValue === '\x00') {
            booleanValue = false;
        } else if (attributeValue === null) {
            booleanValue = false;
        }


        if (!(songId in songToAttributes)) {
            songToAttributes[songId] = {};
        }

        if (attributeType in songToAttributes[songId]) {
            // skip if it exists
            continue;
        }
        if (attributeType === "crossfade-stems") {
            songToAttributes[songId]["crossfade-stems"] = booleanValue;
        } else if (attributeType === "hide-song") {
            songToAttributes[songId]["hide-song"] = booleanValue;
        } else {
            songToAttributes[songId]["start-time"] = attributeValue;
        }
    }
    return songToAttributes;
};



