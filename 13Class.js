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

let e = new Employee("kavya", 24, 30000.00);
console.log(e)
console.log(e.computeAllowance())
console.log(e.computeTotal())

class Student {
    constructor(a, b, c, d, e) {
        this.rollNo = a;
        this.name = b;
        this.m1 = c;
        this.m2 = d;
        this.m3 = e;
    }

    computeTotal() {
        return this.m1 + this.m2 + this.m3;
    }

    computeAvg() {
        return this.computeTotal() / 3;
    }

    computeGrade() {
        let avg = this.computeAvg();
        if (avg >= 90)
            return "A";

        if (avg >= 70)
            return "B";

        if (avg >= 50)
            return "C";

        if (avg < 50)
            return "F"
    }

}
let s = new Student(1, "kav", 87, 90, 87);
console.log(s)
console.log(s.computeTotal())
console.log(s.computeAvg())
console.log(s.computeGrade())