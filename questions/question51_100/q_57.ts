const value = {
	data: {
		name: {id: 1}
	}
}

// name型を抽出してください
// expect {id: number}

// 解答
type nameType = typeof value["data"]["name"]

// 別解

type Data = {
	data : {
		name: {id: number}
	}
}

const getNameValue = (value: Data) => {
	return value.data.name
}

type B = ReturnType<typeof getNameValue>