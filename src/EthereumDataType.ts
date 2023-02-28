
export type Bytes32 = "bytes32";
export type Int8= "int8";
export type Int16 = "int16";
export type Bool = "bool";
export type UInt256 = "uint256";
export type UInt104 = "uint104";
export type Address = "address";
export type EString = "string";

export type EthereumDataType = Bytes32 | Int8 | Int16 | Bool | UInt256 | UInt104 | Address | EString;

export type EthereumEventLogType = string;
export type EthereumEventFieldName = string;

export interface EthereumEventField  {
    name: EthereumEventFieldName;
    type: EthereumDataType;
}

export interface EthereumEventLog {
    event: EthereumEventLogType
    topics: EthereumEventField[];
    data: EthereumEventField[]
}

export class EthereumTopic {
    name: string;
    type: EthereumDataType;
    
    constructor(name: string, type: EthereumDataType) {
        this.name = name;
        this.type = type;
    }
}
