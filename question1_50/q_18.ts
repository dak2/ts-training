// Non-Null Assertion Operator(!)の意味を説明してください
// 参考 : https://typescript-jp.gitbook.io/deep-dive/intro/strictnullchecks#nullasshonnon-null-assertion-operator

// Ans. 指定した変数が必ずnullにはならないことを示す演算子

// ex. 
type Entity = {
  name: string;
}
// Compiled with --strictNullChecks
function validateEntity(e?: Entity) {
  // Throw exception if e is null or invalid entity
}

function processEntity(e?: Entity) {
  validateEntity(e);
  let a = e.name;  // TS ERROR: e may be null.
  let b = e!.name;  // OKAY. We are asserting that e is non-null.
}
