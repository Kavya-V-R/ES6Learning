function f1(){

}

var f2=function(){

}

var f3= ()=>{
    console.log("welcome to arrow function")
}
f3();

var square=(a)=>{console.log(a*a)}
square(5)

//var cube=(a)=>{return a*a*a}
//console.log(cube(5));

var cube=(a)=>a*a*a;
console.log(cube(5));

var arr=[5,6,7,8,9,10]

arr.forEach(
(e)=>{console.log(e)}
)

console.log("-----------------")

var resArr=arr.map(
    (e)=>e*e
    )
console.log(resArr)

console.log("-----------------")

var arr1=[15,16,27,38,29,10]

var res=arr1.reduce(
    (a,b)=>(a+b)
)
console.log(res)


