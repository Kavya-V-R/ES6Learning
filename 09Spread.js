let numbers = [60.0, 70.0, 80.0, 90.0];
let cities = ["Bengaluru", "Hyderbad", "Pune", ...numbers, "Tumkur"]

console.log(cities)

console.log("----------------------------------------")

function multiply(i, j, k) {
    console.log("The Multiplication Result is  " + (i * j * k));
}

const marks = [34, 41, 50, 60];

//multiply(marks[0],marks[1],marks[2])
multiply(...marks);

console.log("----------------------------------------")

let arr1=["welcome","hello","world"];
let arr2=[...arr1]

console.log(arr2)

console.log("----------------------------------------")

print("Country","India","Britain","United state of America","Spain","France");

function print(prefix,...elements){   //REST parameters
    elements.forEach(
        function(e){
            console.log(prefix+":"+e)
        }
    )
}

console.log("----------------------------------------")
