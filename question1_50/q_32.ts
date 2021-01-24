let a = () => ({ name: "Alice" });
let b = () => ({ name: "Alice", location: "Seattle" });

// 1 a = b;
// 2 b = a;

// 1はエラーにならない。2はエラーになる。それぞれ理由を答えなさい

// ans
// 代入元が代入先のオブジェクトのプロパティを戻り値として持っているかどうか

// answer
// 代入元の返り型は代入先のプロパティを含んでいないといけない

// 例 : 2のエラー文
// Type '() => { name: string; }' is not assignable to type '() => { name: string; location: string; }'.
// Property 'location' is missing in type '{ name: string; }' but required in type '{ name: string; location: string; }'.
