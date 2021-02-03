// const values = ['A', 'B']
// type Foo = OneOf<values>

// const v1: Foo = 'A' // ok
// const v2: Foo = 'D' // error

// 配列の各要素(string)のどれかを割り当てることができるUnion型が返るOneOfを定義してください

function stringLiterals<T extends string>(...args: T[]): T[] { return args; }
type OneOf<T extends unknown[]> = T extends (infer R)[] ? R : never;

const values2 = stringLiterals('A', 'B');
type Foo2 = OneOf<typeof values2>;