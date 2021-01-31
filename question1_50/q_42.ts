type User = { name: string, age: number }
const f = (a:User) => a
const a:F1<User> = f({name: "kenji", age: 9});

// 上記のF型の引数が、
// - もし関数型である引数を渡したらその引数が返ってくる型
// - 関数型ではないなら関数が返ってくるF<User>を定義してください

// 解答
type F<T> = T extends (...args: any[]) => any ? any[] : (...args: any[]) => any

// 答え
type F1<T> = T extends (a: infer P) => any ? P : T;
// type F1<T> = T extends (...args: infer P) => any ? P : T;
// -> だと可変長引数対応できるのでこちらの方が良いかも