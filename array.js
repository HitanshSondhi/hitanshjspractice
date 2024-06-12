new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async function");
        resolve();
    }, 1000);
    
}).then(function(){
    console.log("async finished");
})
