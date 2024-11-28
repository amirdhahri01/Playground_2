// function task1(callBack){
//     setTimeout(() => {
//         console.log(1);
//         callBack();
//     },1000)
// }
// function task2(callBack){
//     setTimeout(() => {
//         console.log(2); 
//         callBack();
//     },1000)
// }
// function task3(callBack){
//     setTimeout(() => {
//         console.log(3);
//         callBack();
//     },1000)
// }
// function task4(callBack){
//     setTimeout(() => {
//         console.log(4);
//         callBack();
//     },1000)
// }
// function task5(callBack){
//     setTimeout(() => {
//         console.log(5);
//         callBack();
//     },1000)
// }
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 task5(() => {
//                     console.log("End");
//                 })
//             })
//         })
//     })
// })
// showMessage(() => {
//     return "Amir Dhahri"
// })
// const showMessage = (callback) => {
//     console.log(callback);
// }
// const firstMessage = (callback) => {
//     setTimeout(() => {
//         showMessage("Hello")
//         callback();
//     },2000)
// }
// const secondMessage = () => {
//     showMessage("Hello")
// }
// firstMessage(secondMessage)
// const promise = new Promise((resolve , reject) => {
//     const allWentWill = false;
//     if(allWentWill){
//         resolve("Good")
//     }else{
//         reject("Bad")
//     }
// }) 
// console.log(promise);
// const promise = new Promise((resolve , reject) => {
//     const randomNumber = Math.floor(Math.random() * 10);
//     setTimeout(()=>{
//         if(randomNumber < 5){
//             resolve("Well done !, you guessed right")
//         }else{
//             reject("oops !, you guessed wrong ")
//         }
//     }, 100)
// }) 
// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Done");
// });
// const promiseOne = new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         resolve("Well done !, you guessed right")
//     }, 100)
// }) 
// const promiseTwo = new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         resolve("Well done !, you guessed right")
//     }, 100)
// }) 
// const promiseThree = new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         reject("Well done !, you guessed right")
//     }, 100)
// }) 
// Promise.all([promiseOne , promiseTwo , promiseThree]).then(data => {
//     data.forEach(str => {
//         console.log(str);
//     }) 
    
//     // data?.forEach(str => {
//     //     console.log(str);
//     // })
// }).catch(errs => {
//     // errs?.forEach(err => {
//     //     console.log(err);
//     // })
//     console.log(errs);
    
// })