import { RowNode } from "../../entities/rowNode";
import { IDatasource } from "../iDatasource";
import { InfiniteBlock } from "./infiniteBlock";
import { RowNodeCache, RowNodeCacheParams } from "../cache/rowNodeCache";
export interface InfiniteCacheParams extends RowNodeCacheParams {
    datasource: IDatasource;
}
export declare class InfiniteCache extends RowNodeCache<InfiniteBlock, InfiniteCacheParams> {
    private eventService;
    private context;
    private columnApi;
    private gridApi;
    constructor(params: InfiniteCacheParams);
    private setBeans;
    protected init(): void;
    private moveItemsDown;
    private insertItems;
    insertItemsAtIndex(indexToInsert: number | undefined, items: any[] | undefined): void;
    getRow(rowIndex: number, dontCreatePage?: boolean): RowNode;
    private createBlock;
    refreshCache(): void;
}
