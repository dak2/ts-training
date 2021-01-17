// callbackに型付けしてください
interface Fun {
  (e: number): number
}

function fa(callback: Fun, e: number){
  return callback(e);
}

const fun = (e) => 1 * e;
const v = fa(fun, 1);