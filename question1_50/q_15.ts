// wideningを説明せよ
// リテラル型の拡大
// 型推論によってリテラル型を変数に代入した際にプリミティブ型に拡張されること

// ### letの型推論
// let name = "hoge"
// let number = 34
// let bool = true
// ↓通常のプリミティブの型が推論される

// let name: string
// let number: number
// let bool: boolean

// ### constの型推論
// const name = "hoge"
// const number = 1
// const bool = true
// ↓constの場合
// const name: "hoge"
// const number: 1
// const bool: true

// ## Widening Literal Typesはconstで定められた定数をさらに別の変数に代入するとLiteral Typesではなくなり、普通の型推論になってしまう現象
// ex)

// const name = "hoge"
// let foo = name
// ↓推論結果
// const name: "hoge"
// let foo: string
// literal typesのconstの変数をletに代入した際のtypeはプリミティブになる

// ## 上記の解決法
// -> as const(const assertion)

// const name = "hoge" as const
// let name2 = name
// ↓推論結果
// const name: "hoge"
// let name2: "hoge"
