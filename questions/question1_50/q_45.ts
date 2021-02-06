// const isNarrowScreen = () => false
// function wideNarrow(
//   wide: number | string | undefined, 
//   narrow: number | string | undefined
// ){
//   return isNarrowScreen() ? narrow : wide;
// }

// const a = wideNarrow(0, 8)
// const extendedAreaHeight = 26;
// const b = a + extendedAreaHeight // Operator '+' cannot be applied to types 'string | number' and 'number'.

// 上記は変数aがunionTypeなため+で加算しようとするとエラーになります。
// こちら渡ってきた型を推論するようにしてください

// 答え
// ジェネリクスを使用して戻り値の型を推論させる
const isNarrowScreen2 = () => false
function wideNarrow2<T>(
  wide: T,
  narrow: T
){
  return isNarrowScreen2() ? narrow : wide;
}

const a2 = wideNarrow2(0, 8)
const extendedAreaHeight2 = 26;
const b2 = a2 + extendedAreaHeight2
console.log(b2)