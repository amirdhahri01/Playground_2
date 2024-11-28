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