// T extends U ? X : Y はどのような意味ですか？
// --> TがUに代入可能ならXを、そうではない場合Yを返す

type ParamA = {
  foo: number
}
type ParamB = {
  bar: string
}
type FnParam = ParamA | ParamB
function f<T extends FnParam>(param: T): T extends ParamA ? number : string {
  // ...
  return 1 as any
}

// 引数の型はFnParamを継承
// 引数の型がParamAならnumberをそれ以外ならstringを割り当てる
// 引数はFnParamを継承しているので、{ foo: number } or { bar: string }の形で渡さないとエラー

const type = f({ foo: 1 })
