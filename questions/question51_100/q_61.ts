// 必須プロパティのkeyをUnion型で返す型を作ってください

// 解答
type SampleType = {
  a: string,
  b: number,
  c: {
    test: number
  }
}

type RequiredT = Required<SampleType>

type keys = keyof RequiredT
