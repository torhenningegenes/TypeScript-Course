//* Why do we need interfaces?

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(2, 2));

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable {
  greet(phrase: string): void;
}

let user1: Greetable;

// user1 = {
//   name: "Tor Henning",

//   greet(phrase: string) {
//     console.log("hello my name is " + phrase);
//   },
// };

//user1.greet("Tor Henning");

class Person implements Greetable, Named {
  name?: string;
  age: number;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }

    this.age = 5;
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

const person1 = new Person("Ellie");
//person1.name = "Ellie";
console.log(person1.greet("Hello my name is"));
