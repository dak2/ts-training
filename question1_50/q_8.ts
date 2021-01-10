// interface Part {
//   name: string,
//   age: number,
//   add(): number
// }
// メソッド名だけ取り出した型を作ってください

interface Part {
  name: string,
  age: number,
  add(): number
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
  // [K in keyof T] => objectのKeyを取得
  // T[K]で指定したKeyのプロパティを指定
  // T[K] extends Function ? K : never でプロパティが関数ならKをそれ以外ならnever型を返す
}[keyof T]

type result = FunctionPropertyNames<Part>