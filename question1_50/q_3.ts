// 再度挑戦
// type Foo = {
//     name?: string;
//     age?: number;
// }
// 上記のFooが持つプロパティ全て必須にしてください

type Foo2 = {
  name?: string;
  age?: number;
}

type RequiredFoo = Required<Foo2>;
