// プロパティnameの値型がstring | null、ageの値型がnumber | nullの型Userを定義してください

// ans
type User = {
  name: string | null,
  age: number | null
}

let a:User = { name: "test", age: 23 }
let b:User = { name: "test", age: null }

// 別解
type Users<T> = {[K in keyof T]: T[K] | null }
