// Uをextendsしている値Tはneverを返し、そうでない値型はTを返すDiffを定義してください

// ans
type Diff<T, U> = T extends U ? never : T;

let diff:Diff<string, number> = "da"