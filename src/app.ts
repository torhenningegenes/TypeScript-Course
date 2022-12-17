//* Decorators

// Decorators are for classes
// Decorators are functions you apply to f.eks classes
// Decorators run when classes are defined, not when instanciated
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}
@Logger
class Human {
  name = "Max";
  constructor() {
    console.log("Creating new human object...");
  }
}

// const hum = new Human();

// console.log(hum);
