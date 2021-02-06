// Contextual Typing（文脈的型推論）
// 関数における引数の型を推論してくれる（基本は明示的に書かないといけない）

window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};

// window.onmousedown関数の型を推論して右に割り当てる
// なので、onmousedownにbuttonプロパティがあり、kangarooプロパティがないことを推測してエラーを出す