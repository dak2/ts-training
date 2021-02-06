interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}

// 上記のインターフェースのプロパティを1つにまとめてください

interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}

// -> 同じメソッドであるので、引数をoptionalに変えれば良い