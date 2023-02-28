import { EthereumEventLogType, EthereumEventLog, EthereumEventFieldName } from './EthereumDataType';
export interface BackendQueryPayload {
    address: string;
    eventLog?: EthereumEventLogType;
    selectStatements: EthereumEventFieldName[];
    whereClauses: WhereClause[];
    fromBlockNumber: number;
    distinct: boolean;
    groupBy: string[];
    joinClauses: string[];
}
export interface WhereClause {
    name: EthereumEventFieldName;
    value: number | string;
    valueList: number[] | string[];
}
export declare class EthereumQuery {
    address: string;
    eventLog?: EthereumEventLogType;
    selectStatements: EthereumEventFieldName[];
    whereClauses: WhereClause[];
    fromBlockNumber: number;
    distinct: boolean;
    joinClauses: string[];
    groupBy: string[];
    constructor(address: string);
    from(eventLog: EthereumEventLog): EthereumQuery;
    select(field: EthereumEventFieldName): EthereumQuery;
    where(name: EthereumEventFieldName, value: string | number): EthereumQuery;
    whereIn(name: EthereumEventFieldName, valueList: string[] | number[]): EthereumQuery;
    executeQuery(): Promise<any[]>;
}
