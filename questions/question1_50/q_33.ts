let identity = function<T>(x: T): T {
  return;
};
let reverse = function<U>(y: U): U {
  return
};
identity = reverse;

// 1. 上記は代入できるか
// 2. それぞれTとUの型は何か

// ans
// 1. 代入可能
// -> ジェネリクス型を使っていて構造が同じなので

// 2. ジェリクス型 現状any