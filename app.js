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
// const preHeatOven = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const preHeatOven = true;
//             if(preHeatOven){
//                 resolve("Preheat oven to 180deg");
//             }else{
//                 reject("Failed task");
//             }
//         },1000)
//     })
// }
// const addSugerAndChocoShips = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const addChoco = true;
//             if(addChoco){
//                 resolve("Place butter and choclate chips, stir until melted and smooth");
//             }else{
//                 reject("Failed task");
//             }
//         },1000)
//     })
// }
// const addFlourCocoateAndSalt = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const addSaltFlour = true;
//             if(addSaltFlour){
//                 resolve("Add flour, coco and salt and stir until smooth");
//             }else{
//                 reject("Failed task");
//             }
//         },1000)
//     })
// }
// const bakeMixture = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const bakeMixture = true;
//             if(bakeMixture){
//                 resolve("Bake mixture for really gooey mixture center");
//             }else{
//                 reject("Failed task");
//             }
//         },1000)
//     })
// }
// const bakeChocolateBrownied = async () => {
//     const task1 = await preHeatOven();
//     const task2 = await addSugerAndChocoShips();
//     const task3 = await addFlourCocoateAndSalt();
//     const task4 = await bakeMixture();
//     console.log(task1);
//     console.log(task2);
//     console.log(task3);
//     console.log(task4);
// }
// bakeChocolateBrownied();
// fetch('https://dummyjson.com/products/1' , {
//     method : "PUT" ,
//     headers : {
//         "Content-Type" : "applicaton/json"
//     },
//     body : JSON.stringify({
//         title : "Iphone 19",
//         description : "New iphone 19", 
//         price : "1000",
//         rating : "9/10"
//     })
// })
// .then(res => res.json())
// .then(console.log)
// .catch(err => {
//     console.log(err);
// });
// const getAllProducts = async () => {
//     try{
//         const response = await fetch("https://dummyjson.com/products");
//         const json = await response.json();
//         console.log(json);
//     }catch(err){
//         console.log(err);
//     }
// }   
// getAllProducts();
// const loadJokeBtn = document.querySelector(".load-joke-btn");
// const loadJoke = async () => {
//     try {
//         const chuckNorrisJokes = await fetch("https://api.chucknorris.io/jokes/random" , {
//             headers:{
//                 Accept : "application/json"
//             }
//         });
//         const jokeData = await chuckNorrisJokes.json();
//         document.querySelector(".loading-joke").innerHTML = jokeData.value;
//     } catch (error) {
//         console.log(error);
//     }
// }
// loadJokeBtn.addEventListener("click" , loadJoke)

// const API_KEY = "38df3a70b4841927ac9107a340ef9792"
// const date = document.querySelector(".date");
// const city = document.querySelector(".city");
// const temp = document.querySelector(".temp");
// const tempImg = document.querySelector(".temp-img");
// const description =  document.querySelector(".description");
// const tempMax =  document.querySelector(".temp-max");
// const tempMin =  document.querySelector(".temp-min");

// const months = ["January" , "February" , "March" , "April", 
//                 "May" , "June" , "July" , "August" , "September",
//                 "October" , "November" , "December"];
// const dateObj = new Date();
// let month = months[dateObj.getUTCMonth()];
// let day = dateObj.getUTCDay()+1;
// let year =  dateObj.getUTCFullYear();

// date.innerHTML = `${month} ${day} , ${year}`

// const app = document.querySelector(".app");
// const getWeather = async () => {
//     try {
//         const cityName = document.querySelector(".search-bar-input").value
//         const weatherDataFetch = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&id=524901&appid=${API_KEY}` , {
//             headers:{
//                 Accept : "application/json"
//             }
//         });
//         const weatherData = await weatherDataFetch.json();
//         city.innerHTML = `${weatherData.city.name}`
//         description.innerHTML = `${weatherData.list[0].weather[0].description}`
//         tempImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png"></img>`
//         temp.innerHTML = `<h2>${Math.round(weatherData.list[0].main.temp)}°C</h2>`
//         tempMax.innerHTML = `${Math.round(weatherData.list[0].main.temp_max)}°C`
//         tempMin.innerHTML = `${Math.round(weatherData.list[0].main.temp_min)}°C`
//     } catch (error) {
//         console.log(error);
//     }
// }
// const btn = document.querySelector(".search-icon");
// btn.addEventListener("click" , () => {
//     getWeather();
// })