// 再度挑戦
// type Foo = {
//     name?: string;
//     age?: number;
// }
// Fooからageを省略した型を作ってください

type Foo5 = {
  name?: string;
  age?: number;
}

type excludeAge = Omit<Foo5, 'age'>;
