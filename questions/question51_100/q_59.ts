type Type = {
  "a": string,
  "b": number,
  "c": (ind: string) => void
}

// 上記の型のproperty名を指定した際に、指定したプロパティの値が型として返るように実装してください。
// ex Type<"a"> -> string

// 解答
type ValueType<Key extends keyof Type> = Type[Key]

let a:ValueType<"a"> = "test"
