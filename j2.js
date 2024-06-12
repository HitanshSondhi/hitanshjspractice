// data type conversion



const add=(x,y,callback)=>{
    const result=x+y
    callback(result)

}
const result=(result)=>{
    console.log("the result is",result)
}
add(3,4,result);

function mult(x,y,callback){
    const result=x*y;
    callback(result);
}

mult(3,4, (result)=>{

console.log("the result is",result);


})
