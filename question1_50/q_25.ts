interface User {
  id: string
}
interface AppUser {
  appName: "appName"
  appID: string
}
interface ServiceUser {
  serviceName: 'serviceName'
  serviceID: string
}
const user = { id: "1" }
const appUser = { appName: "appName", appID: "appId"} as const;
const serviceUser = { serviceName: "serviceName", serviceID: "serviceID" } as const


function sample(o: ServiceUser | User | AppUser) {
  return o
}

const result = sample(user)

// 関数 a はServiceUser or User or AppUserを a に渡してそれを返す関数です。 
// 期待型は ServiceUser | User | AppUser になっています。 
// これをそれぞれServiceUser はserviceID、Userはid、AppUserはappIdを返す関数に直して、期待型をstringにしてください

function ans(o: ServiceUser | User | AppUser){
  if("serviceID" in o) return o.serviceID;
  if("appID" in o) return o.appID;
  return o.id;
}

const results = ans(serviceUser) // string