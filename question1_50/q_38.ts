interface UserSettings {
  one: {
    three: number;
    four: number;
  };
  two: {
    five: number;
    six: number;
  };
}

// 再帰的に各プロパティをオプショナルにした型を定義してください

type RecursivePartial<T> = {
  [K in keyof T] ? : T[K] extends (infer U)[] ? RecursivePartial<U>[] : T[K] extends object ? RecursivePartial<T[K]> : T[K];
};

let opt: RecursivePartial<UserSettings> = {
  one: {
    four: 11
  },
  two: {
  }
}

// -> 上記はオプショナルな箇所が任意
// oneオブジェクトではthreeが要らないし、twoでは空のオブジェクトでも良くなっている


