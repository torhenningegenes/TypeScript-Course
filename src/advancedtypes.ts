//* Intersectiong types
// Has alot incoming with interfaces

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Tor",
  privileges: ["Create-server"],
  startDate: new Date(),
};

//
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//* TypeGuards

//Function overload
function Add(a: string, b: string): string;
function Add(a: number, b: number): number;
function Add(a: Combinable, b: Combinable) {
  //* We use typeof to check if a argument matches a certain type
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = Add("Ellie,", " Nora");
//console.log(result.split(" "));
// console.log(Add("Hei", "på deg!"));
// console.log(Add(2, 2));

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  //* We use keyword in to check if a object has a certain property
  if ("privileges" in emp) {
    console.log("Privilages: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate.toLocaleString());
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({
  name: "Heidi",
  startDate: new Date(),
  privileges: ["Add-user"],
});

//* TypeGuard with Classes

class Car {
  drive() {
    console.log("Driving..");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck..");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo: " + amount);
  }
}

type Vehicle = Truck | Car;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //* Use instanceof to check if vehicle is a instance of truck
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//* Discriminated Unions

interface Horse {
  type: "horse";
  runningSpeed: number;
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 23 });

//* Type Casting

const paragraph = document.querySelector("p");
const paragraph2 = document.getElementById("message-output");

//* Version 1
// const userInput = <HTMLInputElement>document.getElementById("user-input");

//* Version 2 - use this with JSX

const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Password";
}
//console.log(userInputElement.value);

interface ErrorContainer {
  // Index types defined by []
  //id: string;
  [prop: string]: string;
}
//* Object based on ErrorContainer.

const errorBag: ErrorContainer = { number: "Invalid user email" };

//* Optional chaining

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

// Optional chaining.
console.log(fetchedUserData?.job?.title);

// Nullish coalesing
const userInput = "";
const storedDate = userInput ?? "DEFAULT VALUE";
console.log(storedDate);
