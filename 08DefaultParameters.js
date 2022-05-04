function f1(a,b){
    if(typeof b=="undefined")
    b=0;
    if(typeof a=="undefined")
    a=0;
    console.log(a+b)
}

f1(7)

function f2(a=0,b=0){
    console.log(a+b)
}
f2(15)
