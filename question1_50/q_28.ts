type Animal = { name: string, run: boolean }
type Bird = { name: string, fly: boolean }
const animal = { name: "tigger", run: true }
const bird = { name: "condol", fly: true }

type NotHumman = Animal | Bird

const test = (b:NotHumman) => {
  // b.run
}

// なぜコンパイルエラーになるのですか？説明してください

// Ans. NotHumman型がAnimalとBirdのunion型なので、run or flyのどちらのプロパティも取れる。
// しかし、渡される引数がAnimal or Birdのどちらか分からないから

// 回答例
const c = (b: NotHumman) => {
  if ("run" in b) { // animalであることが確定する
      b.run
  } else {
      b.fly
  }
}