// const promiseone=new Promise(function(resolve,reject){
//     setTimeout(() => {

//        console.log("async task is complete");

//     }, 5000);
//     resolve()
// })

// promiseone.then( ()=>{
//     console.log("promise consumed");
// }

// )

// const promisesecond=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Promise");
//         resolve({
//             username:"Hitansh",
//             id:"22bds025"

//         })

//     }, 3000);
// })
// promisesecond.then((user)=>{
//     console.log(user);
// })

// const promisethree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "hitansh", password: "123" });
//     } else {
//       reject("Error:something went wrong");
//     }
//   }, 1000);
// });
// promisethree.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);

// }).catch((error)=>{
//     console.log(error);

// }).finally(()=>{
//     console.log("Promise is either rejected or resolved");
// })



const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject('Error: js went wrong');
        }
    }, 1000);
});

async function consumepromisefive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

consumepromisefive();

async function getallusers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()
    console.log(data);
        
    } catch (error) {
        console.log("Error !!",error);
        
    }
    
}
getallusers()
