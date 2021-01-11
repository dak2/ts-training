// neverとはどんな型ですか
// 1. 絶対にreturnされない関数(例えば、関数本体に while(true){}がある場合)
// 2. 常にthrowする関数(例えば function foo(){throw new Error('Not Implemented')}の場合、fooの戻り値の型はneverです)
// 参考: https://typescript-jp.gitbook.io/deep-dive/type-system/never#never

// ## code
// 1. 関数本体に while(true){}がある場合
const foo = () => {
  while(true) {}
}

const bar = foo();
// const bar: never

// 2. 常にthrowする関数
const errorFunction = () => {
  throw new Error('Not Implemented')
}

const error = errorFunction();
// const error: never
