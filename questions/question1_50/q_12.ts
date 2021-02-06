// 非同期の中身を取る型
type ResolvedType<T> = T extends Promise<infer R> ? R : T;

