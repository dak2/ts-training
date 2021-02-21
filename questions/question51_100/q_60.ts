type SomeObject =
{
  a: string;
} | {
  b: number;
} | {
  c: boolean;
}

declare const someObj: keyof SomeObject;

if (someObj.c) { // error
}

// somObj.cを参照すると、エラーになります。TypeScriptが正しく推論できるようにしてください

// 答え
type SomeObject2 =
{
  type: "a"
  a: string;
} | {
  type: "b"
  b: number;
} | {
  type: "c"
  c: boolean;
}

declare const someObj2: SomeObject2;

if (someObj2.type === "c") {
  someObj2.c
}

// 別解1
const check = (someObj2:SomeObject2) => {
  switch(someObj2.type){
    case "a":
      someObj2.a
      return
    case "b":
      someObj2.b
      return
    case "c":
      someObj2.c
      return
    default:
      new Error("not provided type")
  }
}