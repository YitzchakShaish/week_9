import { error } from "console";
import fs from "fs";
import { resolve } from "path";

// //Exercise 1: Say Hello After a Delay (with .then)
function sayHelloAfterDelay(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, delay);
    });
}
const PromiseName = sayHelloAfterDelay("yitzchak", 2700);
PromiseName.then((resolve) =>{
    console.log(resolve); 
}
)

//Exercise 2: Read a File with Promise (with .then)
function readFileContent(path){
    return new Promise((resolve, reject)=> {
        fs.readFile(path, "utf-8", (error, data) => {
            if(error){
                reject(error)
                return;
            }
            resolve(data)
        })
    })
}

const myName = readFileContent("./myName.txt");

myName.then(resolve => {
    console.log(resolve); 
}).catch(reject => {
    console.log(reject)
})

//Exercise 3: Random Success or Failure (with .then and .catch)

function randomOperation(){
   const random = Math.floor( Math.random() * 2);
   console.log(random);
   return new Promise((resolve, reject) => {
    if(!random){
        reject("Failure!")
    }
    resolve("Success!");
   
   })

}

const random = randomOperation();
random.then(resolve =>{
    console.log(resolve);
}).catch(reject =>{
    console.log(reject)
})

//Exercise 4: Timer Race - Which is Faster? (with .then)

function raceTimers(){
    return new Promise((resolve) => {
        setTimeout(() => {
             resolve("Timer A finished!")
        }, 4000);
          setTimeout(() => {
             resolve("Timer B finished!")
        }, 3000);
      
    })
}

const timer = raceTimers();
timer.then(resolve => {
    console.log(resolve)
})
// function raceTimers() {
//     const timerA = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Timer A finished!");
//         }, 2000);
//     });

//     const timerB = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Timer B finished!");
//         }, 3000);
//     });

//     return Promise.any([timerA, timerB]);
// }


// raceTimers().then((message) => {
//     console.log(message);
// });

//Exercise 6: Wait for 3 Promises Together (with .then)
function  waitAll(){
    const first =new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("First")
        }, 1000);
    })
    const second =new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Second")
        }, 2000);
    })
    const third =new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Third")
        }, 3000);
    })
    return Promise.all([first,second,third])
}

const wait = waitAll();
wait.then((resolve)=> {
    console.log(resolve)
})

//Exercise 7: Check if File Exists (with .then and .catch)

function checkFileExists(path){
  return new Promise((resolve, reject) => {
     fs.access(path,(error) =>{
        if(error){
            reject(false)
        }
        resolve(true)
     })
  })
}
checkFileExists("./myName.txt").then((resolve)=>console.log(`File exists: `+resolve)).catch((reject)=> console.log(`File exists: `+reject));



