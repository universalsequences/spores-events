import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";

const networkInfo = {
    network: ZDKNetwork.Ethereum,
    chain: ZDKChain.Goerli,
};
const API_ENDPOINT = "https://api.zora.co/graphql";
let apiKey: string | undefined = undefined;

const args = { 
    endPoint:API_ENDPOINT, 
    networks:[networkInfo], 
};

export const setZoraApiKey = (_apiKey: string) => {
    apiKey = _apiKey;
};

export const zdk = () => new ZDK({
    ... args,
    apiKey: apiKey
}) 

export const decodeTokenURI = (uri: string): string => {
    let starter = 'base64,';
    if (uri.indexOf(starter) >= 0) {
        let str = atob(uri.slice(uri.indexOf(starter) + starter.length));
        return JSON.parse(str);
    }
    return "";
};


