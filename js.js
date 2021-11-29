// // let promis = new Promis(function(resolve, reject){
// //     setTimeout(() => resolve("done"),1000)
// // })

// // let promise = new Promise(function(resolve, reject){
// // setTimeout(() => resolve("done"),1000)
// // })
// //  promise.then(
// //      result => console.log(result)
// //  )

// // let promise = new Promise(function(resolve, reject){
// //     setTimeout(()=> reject(new Error("error sorry")),1000)
// // })
// // promise.then(
// //     result => console.log (result),
// //     error => console.log(error)
// // )


// new Promise (function(resolve, reject){
// throw new Error("some error")
// }).catch(console.log)

// // new Promise((resolve, reject) => {
// //     throw new Error("Ошибка!");
// //   }).catch(console.log); // Error: Ошибка!


// let urls = [
//     'url1',
//     'url2',
//     'url3',
// ]
// let allUrls = urls.map( urls => fatch(url));
// Promise.all(allUrls)

// Bt n.addEventListenner('clic' function(event){
//     fetch(url)
// })

// function* pseudorandom(seed){
// let value = (seed)
// while(true) {
//     value = value * 16873 % 2147474587
//     yield value
// }
// };
//  let generator = pseudorandom(1)
//  console.log(generator.next().value)
//  console.log(generator.next().value)
//  console.log(generator.next().value)
//  console.log(generator.next().value)

//  function* pseudorandom(seed){
//  let value = (seed)
//  while(true){
//      value = value *16873*4721483647
//      yield value
//  }
// }
//  let generator = pseudorandom(1)
//  console.log(generator.next().value)

 
async function findUser(url1, url2, url3) {
    let first = await fetch(`${url1}`).then(res=> res).then(res => res.json());
    let second = await fetch(`${url2}/${first}`).then(res=> res).then(res => res.json());
    let third = await fetch(`${url3}/${second}`).then(res=> res).then(res => res.json());
}

let prom = fetch(`${url1}`).then(res => res).then(res => res.json()).then(res => fetch(`${url2}/${res}`).then(res=> res).then(res=> res.json()).then(res => fetch(`${url3}/${res}`).then(res=>res).then(res=>res.json())))