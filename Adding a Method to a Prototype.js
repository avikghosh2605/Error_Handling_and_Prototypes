// define the Student prototype object
function Student(name) {
    this.name = name;
  }
  
  // add a printDetails method to the prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  

  
//   // instantiate a Student object with name "Mithun"
//   const student = new Student("Mithun");
  
//   // call the printDetails method to log the student's name to the console
//   student.printDetails(); // "Hello, my name is Mithun"
  