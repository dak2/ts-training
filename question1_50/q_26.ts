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
const user1 = { id: "1" }
const appUser1 = { appName: "appName", appID: "appId"} as const;
const serviceUser1 = { serviceName: "serviceName", serviceID: "serviceID" } as const

function a1(o: ServiceUser | User | AppUser){
  if("serviceID" in o) return o.serviceID;
  if("appID" in o) return o.appID;
  return o.id;
}

// を 独⾃定義 TypeGuardで型定義してください。(それぞれ isService、isAppUser、任意でisUser関数を作り、ifのコンディション内で実行。返す値がそれぞれのプロパティを持つようにして、型付けされていることを確認してください)

const isService = (o: any): o is ServiceUser => {
  return o.serviceID === "serviceID";
}
const isAppUser = (o: any): o is AppUser => {
  return o.AppUser === "appUser";
}

type O = ServiceUser | User | AppUser;
function b(o: any){
  if(isService(o)) return o.serviceID;
  if(isAppUser(o)) return o.appID;
  return o.id; // User
}
const resul = b(serviceUser1)
