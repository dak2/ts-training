const t3 = { name: "kenji", age: 99 } as const
type T3 = keyof typeof t3
// T3の型をおしえてください

// type T3 = "name" | "age"