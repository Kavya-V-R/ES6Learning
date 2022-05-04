var myName="kavya"
var myAge=24

console.log("My name is "+myName+(" my age is "+myAge));

//ES%--template string literals

console.log(`My name is ${myName} my age is ${myAge}`)

let emp={
    "id":1221,
    "name":"Ravi",
    "Salary":40000.00,

    print:function () {
       let str=`emp id ${this.id}- emp name - ${this.name}- emp salary- ${this.Salary}`
       console.log(str) 
    }
}

emp.print();