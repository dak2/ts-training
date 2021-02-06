// どんな配列の要素が渡されてもいいような型を作ってください
// ex. arr(["a", 1]) or arr([3, 1])でもエラーにならない

const arr = <T extends any[]>(...rest: T) => {
  return rest
};

arr(["a", 1])