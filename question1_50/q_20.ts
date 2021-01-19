type City = "tokyo";
type OnlySpecificProperty<T> = Pick<T, {[K in keyof T]: T[K] extends City ? K : never}[keyof T]>;
// 型の説明をしてください

// OnlySpecificPropertyに渡された型をマップして、各keyがCity型を継承していれば、各keyの型を返す。違えばneverを返す
// City型と一致した型（key: "tokyo"）のみを渡された型から抜き出す

type Sample = {
  name: "tokyo",
  age: "dd"
}
// 補足
// T[K] => 上記の例だと "tokyo" | "dd"
// keyof T => 上記の例だと name | age

type NewType = OnlySpecificProperty<Sample>
