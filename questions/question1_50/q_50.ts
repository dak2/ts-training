interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

function foo(arg){
  return arg.foo
}

const result = foo({foo: 9});
// 関数fooは現状 interface Foo型を受け取り、 現状Fooが持つfooを返すようになっています。(argはanyです)
// 下記の用件を満たす関数に書き換えてください
// Foo型が渡された場合はarg.fooを返す
// Bar型の場合はarg.barを返す

// 解答
interface Foo2 {
  foo: number;
  common: string;
}

interface Bar2 {
  bar: number;
  common: string;
}

function foo2(arg: Foo2 | Bar2){
  if('foo' in arg) {
    arg.foo
  } else {
    arg.bar
  }
}

const result2 = foo2({foo: 9, common: 'test'});

// 答え
interface Foo3 {
  foo: number;
  common: string;
}

interface Bar3 {
  bar: number;
  common: string;
}

function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

function foo3(arg: Bar | Foo){
  if(isFoo(arg)){
    return arg.foo
  } else {
    return arg.bar
  }
}

const result3 = foo3({ foo: 9, common: "fa" });
