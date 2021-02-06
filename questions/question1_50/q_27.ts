// const o = { name: "hoge" }
// function a(o){
//     return o
// }

// a(o)
// a();

// defaultValueとany型に対応してください

const o = { name: "hoge" }
function a(o = { name: "sample" }){
    return o
}

a(o)
a();
