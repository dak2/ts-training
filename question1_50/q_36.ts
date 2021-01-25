// let foo:any = {}
// foo["a"] = { message: "some message" };

// fooにanyを注釈しています。インデックスにstring、値に代入しようとしている型を指定してください

let foo:{ [index: string]: { message: string }} = {}
foo["a"] = { message: "some message" };