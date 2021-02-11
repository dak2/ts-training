const a = {a: "A", b: "B", c: 1}
const A = {a: "A", b: "B", c: 1}

// cの値を型とするtypeを書いてください

// 解答
const A2 = {a: "A", b: "B", c: 1} as const
type Reuslt = typeof A2["c"]
// 定数を型定義する際はtypeof => 変数/定数の型を取得できる

// 答え
type ExtractCValue<T extends Record<string, string | number>, V extends T[keyof T]> =  V extends number ? V : never

type Result2 = ExtractCValue<typeof A, 1>

