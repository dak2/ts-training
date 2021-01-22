declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

let myElem: HTMLDivElement;
let x = fn(myElem); // x: any

// myElemの変数HTMLDivElement型のときfnを実行すると戻り値の型がanyであるが、stringを返すよう修正しなさい

// Ans.
// TypeScript は関数呼び出し時に最初にマッチしたオーバーライドを選ぶので、any だと最初に必ずマッチしてしまう
// そのため、順番を変える

declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

