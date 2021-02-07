type Person = {
  name: string,
  age: number,
  id: number,
}

const me:Person = { name: "a", age: 11, id: 999 };

Object.keys(me).forEach(key => {
  console.log(me[key]) // error
})

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Person'.
// No index signature with a parameter of type 'string' was found on type 'Person'
// 上記エラーが出ないように正しく修正してください

// 答え
// コンパイラはmeがオブジェクトリテラルなことを知っていてそのkeyもまた具体的に "name" | "age" | "id"ということを知っています。
// keyはstringでかなり広範囲なものをさし、unionな"name" | "age" | "id"にアサインできません。
// この場合、keyが何かをより具体的に明示するする必要があります

type Person2 = {
  name: string, age: number, id: number,
}
const me2 = {name: "a", age: 11, id:999};

Object.keys(me2).forEach(key => {
  console.log(me2[key as keyof Person2]) // ok
})