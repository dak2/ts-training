type MyUnionType =
  | { foo: 'a', bar: 1 }
  | { foo: 'b', bar: 2 }
  | { foo: 'c', bar: 3 }
// MyUnionTypeを type Foos = 'a' | 'b' | 'c' のようにfooプロパティのvalueのunion型にしてください

// 解答
type OnlyValues<T>= {
  [K in keyof T]: T[K]
}[keyof T]

type Foos = OnlyValues<Pick<MyUnionType, 'foo'>>
// age: "a" | "b" | "c" を[keyof T]するとT[age]となって "a" | "b" | "c" の型になる

// 答え1
type FooType = MyUnionType['foo']

// 答え2
type PickField<T, K extends string> = T extends Record<K, any> ? T[K] : never;

type FooType2 = PickField<MyUnionType, 'foo'>