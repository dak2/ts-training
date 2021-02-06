// let foo:any = {}
// foo["a"] = { message: "some message" };

// fooにanyを注釈しています。
// インデックスにstring型, objectにプロパティ名と値の型を定義してください

let foo:{ [index: string]: { message: string }} = {}
foo["a"] = { message: "some message" };