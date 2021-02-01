type User = { name: string, age: number, id: number }

// 上記の型がnumberのものだけを抽出した型を作ってください
// 期待する結果 {age: number, id: number}

// 解答
type OnlyNumber1 = Omit<User, 'name'>

type OnlyNumber2<T> = {
  [K in keyof T]: T[K] extends number ? T[K] : null
}

type OnlyNumber = NonNullable<OnlyNumber2<User>>
// これなんで下記になるのかわからない
// type OnlyNumber = {
//   name: null;
//   age: number;
//   id: number;
// }
// [keyot T]を使って型だけ（null, number, number）を参照していなかった

// 答え
type Value<T> = { [K in keyof T]: T[K] extends number ? K : never }[keyof T]

type NumberType = Pick<User, Value<User>>
