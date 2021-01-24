let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

// 1 y = x;

// 2 x = y;

// 1はエラーにならず2はエラーになります。それぞれ理由を答えてください。

// ans
// 1だとyの引数が取れるtypeはnumberとstringだが、xはnumberのみなので割当可能
// 2だとxの引数が取れるtypeはnumberだが、xはnumberとstringなので割当不可能

// answer
//返る型が同じ場合、引数の数は関係ない。代入元が代入先の引数を持っているかどうか。
