let arr1=[2,5,3,4]

function f1(a,b){
    return a+b;
}
var r1=arr1.reduce(f1)
console.log(r1)

let arr2=[100,200,300,400]
function f2(a,b){
    return a+b;
}
var r2=arr2.reduce(f2)
console.log(r2)

var arr3=[6,2,16]
function f2(a,b){
    if(a>b)
    return a;
    else
    return b;
}

var r3=arr3.reduce(f2)
console.log(r3)

function f3(a,b){
    if(a<b)
    return a;
    else
    return b;
}

var r4=arr3.reduce(f3)
console.log(r4)

var names=["Kavya","Mamtha","Dini","Venu","Manya"];

function chcount(a,b){
    return a+b;
}

var r5=names.reduce(chcount);
console.log(r5.length);

let emps=[
    {
        "id":101,
        "name":"kavyavr",
        "salary":70000
    },
    {
        "id":102,
        "name":"manya",
        "salary":600000
    },
    {
        "id":103,
        "name":"navyashree",
        "salary":60000
    },
]

var r6=emps.reduce(function f5(a,b){
    if(a.salary>b.salary)
    return a;
    else
    return b;
})
console.log(r6)

var r7=emps.reduce(function f6(a,b){
    if(a.salary<b.salary)
    return a;
    else
    return b;
})
console.log(r7)

var r8=emps.reduce(function f7(a,b){
    if(a.name.length<b.name.length)
    return a;
    else
    return b;
})
console.log(r8)