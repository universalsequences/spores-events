import {EthereumEventLogType, EthereumEventLog, EthereumEventFieldName} from './EthereumDataType';
import axios from 'axios';

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
    valueList: number[] | string [];
}

export class EthereumQuery {
    address: string;
    eventLog?: EthereumEventLogType;
    selectStatements: EthereumEventFieldName[];
    whereClauses: WhereClause[];
    fromBlockNumber: number;
    distinct: boolean;
    joinClauses: string [];
    groupBy: string [];

    constructor(address: string) {
        this.address = address;
        this.selectStatements = [];
        this.whereClauses = [];
        this.fromBlockNumber = 0;
        this.distinct = false;
        this.joinClauses = [];
        this.groupBy = [];
    }

    from(eventLog: EthereumEventLog):  EthereumQuery {
        this.eventLog = eventLog.event;
        return this;
    }

    select(field: EthereumEventFieldName): EthereumQuery {
        this.selectStatements.push(field);
        return this;
    }

    where(name: EthereumEventFieldName, value: string | number): EthereumQuery {
        this.whereClauses.push({
            name,
            value,
            valueList: []
        });
        return this;
    }

    whereIn(name: EthereumEventFieldName, valueList: string[] | number[]): EthereumQuery {
        this.whereClauses.push({
            name,
            value: 0,
            valueList,
        });
        return this;
    }

    async executeQuery(): Promise<any[]> {
        let url = "https://zequencer.io/search";
        let resp = await axios.post(
            url , 
            JSON.stringify(this),
        );
        return resp.data || [];
    }
}
