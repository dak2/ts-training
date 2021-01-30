type human = { name: string, age: number }

// 上記の型のプロパティ全ての型をUnion型として取得する型を定義してください。 string | number

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
type ValueResult = Value2<human> // string | number