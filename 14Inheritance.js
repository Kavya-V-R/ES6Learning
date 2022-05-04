class Employee {
    constructor(n, a, b) {
        this.name = n;
        this.age = a;
        this.basic = b;
    }

    computeAllowance() {
        return this.basic * 0.35;
    }

    computeTotal() {
        return this.basic + this.computeAllowance();
    }
}

class Manager extends Employee {
    constructor(n, a, b, ec) {
        super(n, a, b);
        this.employeeCount = ec;
    }

    printEmployeeCount() {
        console.log(this.employeeCount);
    }

    computeTotal() {
        return this.basic + this.computeAllowance() + (this.employeeCount * 100);
    }
}

let m = new Manager("kavya", 54, 5000, 20);
console.log(m)
m.printEmployeeCount()
console.log(m.computeTotal())
