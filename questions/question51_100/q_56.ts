const objArray = [ { foo: 1, bar: 2 }, { foo: 3, bar: 4 }, { foo: 5, bar: 6 } ] as const

// 上記fooの値のみが入った(1 | 3 | 5)[]の型を返す関数を書いてください

// 解答
function getFooValue(arr: typeof objArray){
	return objArray.map(({foo}) => foo)
}
const result = getFooValue(objArray) // (1 | 3 | 5)[]