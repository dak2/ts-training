const obj = {a: "A", b: "B", c: 1}
// objからそれぞれの値で且つliteralなunion typeを作ってください。(期待する結果 -> "A" | "B" | 1 )

// 答え
const a = {a: "A", b: "B", c: 1} as const
// as constにしてリテラルタイプにしておかないとだめ
type LiteralsUnion = typeof a[keyof typeof a]
