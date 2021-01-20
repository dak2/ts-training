export default function person({ detail = {} as Detail } : Person) {
  return detail.name
};

type Detail = {
  name: string
}

interface Person {
  id: number
  detail: Detail
}

person({detail: {name: "fafa"}, id: 1 });

// はdetailが初期化された時 undefinedが渡って来てもいいように対応してください
// defaultParameterの設定 detail = {} as Detail