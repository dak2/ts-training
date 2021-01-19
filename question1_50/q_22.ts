// type F = {
//     foo: string;
//     bar: number;
// }
// const E:F = { foo: "fafa", bar: "fafa"} //Error
// 定義元のFを直接編集せずに代入できるように型付けしてください

// Ans
type F = {
    foo: string;
    bar: number;
}
const E:F = { foo: "fafa", bar: "fafa" as any }
// -> any良くない

// Record<Keys, Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype
// 第二引数のTypeをマップして、第一引数で指定した型に変更する

const S:Record<keyof F, string> = { foo: "fafa", bar: "fafa" }
