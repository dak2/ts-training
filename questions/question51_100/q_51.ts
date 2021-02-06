interface NumberMap {
  [key: string]: number;
}
const map: NumberMap = {
  one: 1,
  two: 2,
  three: 3,
}

const test = map.four;

type MyKeys = keyof typeof map;

// 1. NumberMap型に存在しないPropertyを指定した際にエラーにしてください
// 2. type MyKeys = keyof map の型の戻り値をkey名のみ（one | two | three）を返すようにしてください

// 解答
type NumberMaps = {
  one: 1,
  two: 2,
  three: 3,
}

type ToSpecifiedType<T> = {
  [K in keyof T]: T[K]
}

type SpecifiedType = ToSpecifiedType<NumberMaps>

const maps: SpecifiedType = {
  one: 1,
  two: 2,
  three: 3,
}

// const test2 = maps.four;
// Property 'four' does not exist on type 'ToSpecifiedType<NumberMaps>'.

type MyKeys2 = keyof typeof maps;

// 答え
interface NumberMap2 {
  [key: string]: number;
}

function careteMap<T extends NumberMap2>(v: T){
  return v
}

const map3 = careteMap({
  one: 1,
  two: 2,
  three: 3,
})

// const test3 = map3.four;
// Property 'four' does not exist on type '{ one: number; two: number; three: number; }'.

type MyKeys3 = keyof typeof map3;