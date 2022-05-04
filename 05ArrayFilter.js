let arr1=[20,17,55,61,34,78]

function f1(e){
    if(e>=50)
    return true;
    else
    return false;
}

console.log("---------------")

var resArr1=arr1.filter(f1);
console.log(arr1)
console.log(resArr1)

var resArr2=arr1.filter(
    function(e){
        if(e>=30)
        return true;
        return false;
    }
);

console.log(resArr2)

console.log("---------------")

var myNumbers=[7,12,13,15,17,21,23,29];

var resArr3=myNumbers.filter(
    function(e){
        for(i=2;i<e;i++){
            if(e%i==0)
            return false;
            else
            return true;
        }
    }
);
console.log(resArr3)

console.log("---------------")

var mynames=["kavya","mamtha","venu","dini","manya","lakshya"]
var resArr4=mynames.filter(
    function(e){
        if(e.length>5)
        return true;
        return false;
    })

    console.log(resArr4);
