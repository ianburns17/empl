import { Employee } from "../interfaces/employee";

abstract class AbstractEmployee implements Employee {
  constructor(public name: string, public id: number) {}
  
  abstract calculateSalary(): number;

  displayDetails(): void {
    console.log(`Name: ${this.name}, ID: ${this.id}, Salary: ${this.calculateSalary()}`);
  }
}

class FullTimeEmployee extends AbstractEmployee {
  constructor(name: string, id: number, private annualSalary: number) {
    super(name, id);
  }

  calculateSalary(): number {
    return this.annualSalary;
  }
}

class PartTimeEmployee extends AbstractEmployee {
  constructor(name: string, id: number, private hourlyRate: number, private hoursWorked: number) {
    super(name, id);
  }

  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

export { AbstractEmployee, FullTimeEmployee, PartTimeEmployee };