import { RowNode } from "../entities/rowNode";
import { Column } from "../entities/column";
import { ChangedPath } from "../rowModels/clientSide/changedPath";
export interface SortOption {
    inverter: number;
    column: Column;
}
export interface SortedRowNode {
    currentPos: number;
    rowNode: RowNode;
}
export declare class SortService {
    private sortController;
    private columnController;
    private valueService;
    private gridOptionsWrapper;
    private postSortFunc;
    init(): void;
    sort(sortOptions: SortOption[], sortActive: boolean, deltaSort: boolean, dirtyLeafNodes: {
        [nodeId: string]: boolean;
    }, changedPath: ChangedPath, noAggregations: boolean): void;
    private doFullSort;
    private mapNodeToSortedNode;
    private doDeltaSort;
    private mergeSortedArrays;
    private compareRowNodes;
    private getValue;
    private updateChildIndexes;
    private pullDownDataForHideOpenParents;
}
