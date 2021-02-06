type A = { name: string }
type B = { age: number }

// AとBのkeyであるnameとageを合わせたtype、 name | ageとなるUnion型を作ってください

// 解答
type Union<T, S> = {
  [K in keyof T]: K
}[keyof T] | {
  [P in keyof S]: P
}[keyof S]

type Test = Union<A,B>

// 答え
type A1 = { name: string }
type B1 = { age: number }
type T1 = keyof (A1 & B1)