//  type narrowing(型の絞り込み)とはなんですか

// Ans. 特定の条件において変数の型が限定されること
// Ex. 条件分岐の際

type MyObj = { foo: string; };

let objOrNull: MyObj | null;
if (Math.random() < 0.5) {
    objOrNull = { foo: "123" };
} else {
    objOrNull = null;
}

if (objOrNull != null) {
  // この中では objOrNull は MyObj
  // なのでプロパティ foo を参照できる
  console.log(objOrNull.foo);
}
