// function add<T extends (number | string)>(a: T, b: T): T {
//   if (typeof a === 'string') {
//     return a + b;
//   } else if (typeof a === 'number') {
//     return a + b;
//   }
// }

// numberかstringが渡ってくることを想定して作られた関数です。
// 2つは同じ型の引数を取るため、型をTとして扱おうとしています。
// ただ、コンパイルエラーになっています。正しく修正してください

// 答え

function add<T extends (number | string)>(a: T, b: T): T {
  if (typeof a === 'string' && typeof b === "string") {
    return a + b as T
  } else if (typeof a === 'number' && typeof b === "number") {
    return a + b as T
  }
  throw Error("not Support")
}
