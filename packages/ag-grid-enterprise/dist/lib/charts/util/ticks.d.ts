export default function (a: number, b: number, count: number): NumericTicks;
export declare class NumericTicks extends Array<number> {
    constructor(decimalDigits: number, size?: number);
    readonly decimalDigits: number;
}
