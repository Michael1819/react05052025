function getWeather() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("sunny")
        }, 100)
    })
}

function getWeatherIcon(weather){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            switch(weather){
                case "sunny":
                    resolve("sun")
                    break
                case "cloudy":
                    resolve("cloud")
                    break
                case "rainy":
                    resolve("rain")
                    break
                default:
                    reject("Invalid weather")
            }
        }, 100)
    })
}

function onSuccess(data){
    console.log(`Success: ${data}`)
}

function onError(data){
    console.log(`Error: ${data}`)
}   

// getWeather().then(getWeatherIcon).then(onSuccess, onError)

function fun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('404')
        },100)
    }
    )
}

function fun2(){
    console.log('fun2')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('200')
        },100)
    })
}

function onSuccess(data){
    console.log(`Success: ${data}`)
}

function onError(errorCode){
    console.log(`Error: ${errorCode}`)
}

function onFinally(){
    console.log('Finally')
}

// fun1().then(fun2).then(onSuccess, onError).finally(onFinally)

// .then and async/await
const p = new Promise((resolve) => {
    setTimeout(() => {
        // resolve('resolved value')
        reject('rejected value')
    }, 2000)
})
console.log(typeof p)
// p.then(data => console.log(data)).catch(error => console.log(error))
// console.log('sync code')

async function fun(){
    const data = await p
    console.log(data)
    console.log('async code')
}

fun()
console.log('sync code')

function foo() {
    try{
        const data = await p
        console.log(data)
    }catch(error){
        console.log(error)
    }   
}








// use both .then and async/await to write, including error handling
// fetch API from jsonplaceholder
// .then
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
} 
//async/await
async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

// write a promise-based function that return a random number after a delay
function randomNumber() {
    return new Promise((resolve, reject) {
        setTimeout(() => {
            resolve(Math.random())
        }, 100)
    })
}
//.then
randomNumber().then(data => console.log(data)).catch(error => console.log(error))
//async/await
async function randomNumber(){
    try{
        const data = await randomNumber()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

// use Promise.all to write an example
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2')
    }, 100)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p3')
    }, 100)
})  

function onSuccess(data){   
    console.log(`Success: ${data}`)
}
function onError(error){
    console.log(`Error: ${error}`)
}
// .then
Promise.all([p1, p2, p3]).then(onSuccess, onError)
// async/await
async function fetchData(){
    try{
        const data = await Promise.all([p1, p2, p3])
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

