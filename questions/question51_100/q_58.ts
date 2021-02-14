type ActivityLog = {
	lastEvent: Date
	events: {
		id: string
		timestamp: Date
		type: "Read" | "Write"
	}[]
}

let activityLog: ActivityLog = { lastEvent: new Date(), events: [{ id: "1", timestamp: new Date(), type: "Read"}]}

function get(activityLog: ActivityLog, key: string){
	return activityLog[key] // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'ActivityLog'.
}
let lastEvent = get(activityLog, "lastEvent") // any

// keyをstringに型付けしているため、activityLog[key]がいろいろな型を返す可能性があるためTypeScriptはanyを返しています
// keyがactivityLogに存在するプロパティのみ渡すことを保証し、その後適切に型論されるようにget関数を修正してください

// 答え

function get2<T, K extends keyof T>(activityLog: T, key: K){
  return activityLog[key]
}
let lastEvent2 = get(activityLog, "lastEvent")

// or
type Get = <T, K extends keyof T>(activityLog: T, key: K) => T[K]

let get3:Get = (activityLog, key) => {
  return activityLog[key]
}