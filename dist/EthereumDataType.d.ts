export declare type Bytes32 = "bytes32";
export declare type Int8 = "int8";
export declare type Int16 = "int16";
export declare type Bool = "bool";
export declare type UInt256 = "uint256";
export declare type UInt104 = "uint104";
export declare type Address = "address";
export declare type EString = "string";
export declare type EthereumDataType = Bytes32 | Int8 | Int16 | Bool | UInt256 | UInt104 | Address | EString;
export declare type EthereumEventLogType = string;
export declare type EthereumEventFieldName = string;
export interface EthereumEventField {
    name: EthereumEventFieldName;
    type: EthereumDataType;
}
export interface EthereumEventLog {
    event: EthereumEventLogType;
    topics: EthereumEventField[];
    data: EthereumEventField[];
}
export declare class EthereumTopic {
    name: string;
    type: EthereumDataType;
    constructor(name: string, type: EthereumDataType);
}
