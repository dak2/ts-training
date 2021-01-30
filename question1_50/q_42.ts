type User = { name: string, age: number }
const f = (a:User) => a
const a:F1<User> = f({name: "kenji", age: 9});

// 解答
type F<T> = T extends (...args: any[]) => any ? any[] : (...args: any[]) => any

// 答え
type F1<T> = T extends (a: infer P) => any ? P : T;