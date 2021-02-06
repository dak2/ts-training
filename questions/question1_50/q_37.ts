// const tupleStrNum = ["X", 2];
// 型推論で(string|number)[]になります。
// [string, number] とするにはどうしたらいいですか

// ans
const tupleStrNum:[string, number] = ["X", 2];

// or
const tupleStrNum2 = ["X", 2] as [string, number];