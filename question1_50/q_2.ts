// 再度挑戦
// interface Foo {
//     bar: string;
//     baz: number;
// }
// Fooが持つプロパティ全てoptionalにしてください

interface Foo1 {
  bar: string;
  baz: number;
}

type PartialFoo = Partial<Foo1>;
