// 再度挑戦
// type Foo = {
//     name?: string;
//     age?: number;
// }
// のFooからnameだけを取得したtypeを作ってください

type Foo3 = {
  name?: string;
  age?: number;
}

type nameType = Pick<Foo3, 'name'>