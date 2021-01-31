type human = { name: string, age: number }

// 上記の型のプロパティ全ての型をUnion型として取得する型を定義してください。 
// 期待する型 string | number

// 解答
type humanUnion = {
  [K in keyof human]: string | number
}

// 答え
// string | numberだけ返せばよかった。あくまで型だけ

// 1
type Value1<T> = T[keyof T]
type ValueType = Value1<human> // string | number

// 2
type Value2<T> = { [K in keyof T]: T[K] }[keyof T]
type ValueResult2 = Value2<human> // string | number

// 解説
// [keyof T]が必要なのはなぜ？
type Value3<T> = { [K in keyof T]: T[K] }
type ValueResult3 = Value3<human>
// [keyof T]がないとkeyとvalueがセットで返る
// type ValueResult3 = {
//   name: string;
//   age: number;
// }
// string | numberの型情報だけ欲しい
// [keyot T]でobjのkeyを指定してvalueだけ取得
// -> string | numberだけ返る
