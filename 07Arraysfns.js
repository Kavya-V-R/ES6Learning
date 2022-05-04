var names=["Kavya","Mamtha","Venu"]

names.push('Dinesh')
names.push('Asha',"soundarya")
console.log(names)

console.log("--------------")

console.log(names.pop())
console.log(names)

console.log("--------------")

names.unshift("abc")
console.log(names)

console.log("--------------")

names.shift()
console.log(names)

console.log("--------------")

names.splice(2,3)
console.log(names)

console.log("--------------")

names.splice(2,0,"abc","xyz");
console.log(names)
