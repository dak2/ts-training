// const greeting = (value) => "hello!" + value
// 関数greeting は "hello!world!"など、任意の文字列返す関数です。 
// 引数valueに型注釈してください

const greeting = (value: string) => "hello!" + value


type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }

type CatAndDog = Cat | Dog;

let a: CatAndDog = {
  name: 'daichi',
  purrs: true,
  wags :true,
}