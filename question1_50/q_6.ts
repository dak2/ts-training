// const user = { name: "kenji", age: 98 };
// のuserに推論される型は何ですか。またその理由を教えてください。

const user = {
  name: "kenji",
  age: 98 
};

// const user = {
//   name: string,
//   age: number
// };

const x = 'x';
// const x: "x"
// const x: stringではく上記の型推論をする
// constを使うと具体的な値を型として推論する
// しかし、objectはミュータブル（変更可能）
// よってconstで宣言しても具体的な値を型推論しない
