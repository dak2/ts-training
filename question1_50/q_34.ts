
type StrFunc = (arg: string) => string;
type NumFunc = (arg: number) => string;

declare const obj: StrFunc | NumFunc;
//obj("fa");  Argument of type 'string' is not assignable to parameter of type 'never'.


// 上記は呼び出すことができません。理由を答えてください

// ans
// -> 関数objはStrFuncとNumFuncのunion型なので、引数をどちらの型に適用すれば良いかtypescriptが判断できない
// -> 引数の型がneverになっている
// どちらの関数が呼ばれてもいいように引数の型を調整する必要あり

type StringFunc = (arg: string) => string;
type NumberFunc = (arg: number) => string;
type StrOrNumFunc = <T>(arg: T) => string

declare const s: StrOrNumFunc
s("fa");

// or

(s as StrFunc)("fa"); // これは握り潰してるから良くなさそう