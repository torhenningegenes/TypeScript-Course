// Code goes here!

const greeting = "Hello TypeScript!";
console.log(greeting.toUpperCase());

//* Main class
abstract class Department {
  static fiscalYear = 2022;
  // Properties
  // private name: string;
  protected employees: string[] = [];

  // * Constructor function that is called when you create a new instance of the class.
  //* Private keyword makes employees only accessible from methods inside the instance of class
  constructor(
    protected readonly id: number,
    protected readonly name: string // private employees: string[] = []
  ) {
    // this.name = n;
    //this.employees = [];
  }
  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee("Jan Rune");
console.log(employee1, Department.fiscalYear);
//* Inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe(): void {
    console.log("IT-department - ID: " + this.id);
  }
}

class SupportDepartment extends Department {
  //* Defining getter and setter
  private lastLog: string;
  private static instance: SupportDepartment;

  get mostRecentLog() {
    if (this.logs) {
      return this.lastLog;
    }
    throw new Error("No log found!");
  }

  set mostRecentLog(value: string) {
    if (!value) {
      throw new Error("Please pass in value");
    }
    this.addLog(value);
  }
  constructor(id: number, private logs: string[]) {
    super(id, "Customer Support");
    this.lastLog = logs[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new SupportDepartment(4, []);
    return this.instance;
  }
  addLog(text: string) {
    this.logs.push(text);
    this.lastLog = text;
  }

  printLogs() {
    console.log(this.logs);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log("Customer support - ID: " + this.id);
  }
}

{
  //const accounting = new Department(1, "Accounting");
  const itDepartment = new ITDepartment(2, ["Michael", "Tor Henning"]);
  const support = SupportDepartment.getInstance();
  const support2 = SupportDepartment.getInstance();
  console.log(support, support2);
  //console.log(accounting);
  // accounting.addEmployee("Tor Henning");
  // accounting.addEmployee("Tonje");
  // accounting.addEmployee("Farzaneh");
  // accounting.addEmployee("Lise");
  // accounting.describe();
  itDepartment.addEmployee("Ivar");
  itDepartment.addEmployee("Nikolai");
  itDepartment.describe();
  console.log(itDepartment);
  support.addLog("Car broke down!");

  support.describe();
  support.addEmployee("Max");
  support.addEmployee("Manu");
  support.printEmployeInformation();
  support.mostRecentLog = "Car wouldnt start";
  support.printLogs();
  console.log(support.mostRecentLog);

  //console.log(accounting.employees);

  // * Since employees is private we cant add to the array outside the method.
  //accounting.employees[4] = "Nasro";
  //accounting.printEmployeInformation();
  support.describe();
}
// const accountingCopy = {
//   name: "Sales",
//   employes: 2,
//   describe: accounting.describe,
// };

// accountingCopy.describe();

// TODO Look on comment color
