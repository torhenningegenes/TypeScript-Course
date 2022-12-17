//* Generics

// const names: Array<string> = ["Max", "Manuel"];

// names[0].split("");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
//   reject("Did not work!");
// });

// console.log(
//   promise.then((data) => {
//     data.split("");
//   })
// );

//* Building own generic types

//* use extend to make sure that you use a object
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Nora", hobbies: ["Pokemon", "Playing"] },
  { age: 30 }
);
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Videogames", "Programming"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

//* Generic Classes

class dataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return console.log("Data not found..");
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}
const textStorage = new dataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
textStorage.addItem("Tor");
console.log(textStorage.getItems());

const numberStorage = new dataStorage<number>();

numberStorage.addItem(2);
numberStorage.addItem(4);
numberStorage.addItem(6);
numberStorage.removeItem(4);
console.log(numberStorage.getItems());

// const objStorage = new dataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Tor" });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntill: Date;
}

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntill = date;
//   return courseGoal;
// }

const names: Readonly<string[]> = ["Max", "Anna"];
//names.push("Manu");
