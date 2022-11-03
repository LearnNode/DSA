

class Human {
  getHumanRace = () => {
    console.log('kenyan')
  }
}

class Student {
  getStudentId = () => {
    console.log('1345')
  }
};

console.log(Object(Human));
Student.prototype = Object(Human);

let mixins = {
  getHeight: 24
}



Object.assign(Student.prototype, mixins);

let student1 = new Student

console.log(student1.getHumanRace())

