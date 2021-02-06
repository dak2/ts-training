// Nullableな型を作ってください
type PropNullable<T> = {[P in keyof T]: T[P] | null};

interface User { name: string, age: number, money: null }

const obj:PropNullable<User> = { name: "kenji", age: 99, money: null }

// *Mapped Types => 型のfor文
// [P in keyof T]
interface Vegitables {
  tomato: string,
  pumpkin: string,
}

type Dish<T> = {
  [P in keyof T]: string
  // 引数の型のpropertyを複数展開してそのpropertyに同一の型stringを定義
}

type Dinner = Dish<Vegitables>
// type Dinner = {
//   tomato: string;
//   pumpkin: string;
// }

