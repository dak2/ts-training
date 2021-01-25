interface MyObj {
  name: string;
  age: number | undefined;
}

let myObj: MyObj = {
  name: "kenji",
  age: null
};

// 上記はErrorになります。なぜですか。また正しく修正してください

// 理由
// -> ageのプロパティが足りていない。undefindでもオプショナルを使わない場合はプロパティは存在はしていないとだめ
// -> オプショナルを付与

interface MyObj2 {
  name: string;
  age?: number | undefined;
}

let myObj2: MyObj2 = {
  name: "kenji",
};