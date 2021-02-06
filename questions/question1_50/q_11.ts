// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// 何をする型か説明してください(とくにinfer)
// 引数の型が関数((...args: any[]))なら、その戻り値の型を推論(infer)して返す。
// 関数でなければanyを返す
type ReturnTypes<T> = T extends (...args: any[]) => infer R ? R : any;

const fn = () => {
  return 'hello'
}
let tmp: ReturnTypes<typeof fn>