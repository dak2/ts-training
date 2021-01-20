// type Exclude<T, U>の説明をしてください

// 渡されたTの型からUの型の内、一致する型だけを除いて返す
// TがUに当てはまらない場合、

type S = Exclude<string | number, boolean | string | null>
// type S: number
// -> Uの型（boolean string null）の内、stringのみがTに当てはまる
// -> Tの内、stringのみを除いてnumberのみ返す