class Human {

    constructor(name, gender, age, height, weight) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
  }

class Worker extends Human {

    constructor (name, gender, age, height, weight, workPlace, salary) {
        super (name, gender, age, height, weight)
        this.workPlace = workPlace;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name}  works`);
    }
}


class Student extends Human {

    constructor (name, gender, age, height, weight, studyPlace, scholarship) {
        super (name, gender, age, height, weight)
        this.studyPlace = studyPlace;
        this.scholarship = scholarship;
    }

    watchSoapOperas() {
        console.log(`${this.name}  watches soap operas`);
    }
}


let worker = new Worker('Peter', 'male', 35, 180, 90, 'Mayak', 4600 );

let student = new Student();

student.name = 'John';
student.scholarship = 1600;