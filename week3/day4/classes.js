class Hamster {
  constructor(name) {
    (this.owner = ""), (this.name = name), (this.price = 15);
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  excercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const timmy = new Person("Timmy");

timmy.age += 5;

for (let i = 0; i < 5; i++) {
  timmy.eat();
}

for (let i = 0; i < 5; i++) {
  timmy.excercise();
}

const gus = new Hamster("Gus");
gus.owner = "timmy";
timmy.buyHamster(gus);

for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}

timmy.eat();
timmy.eat();
timmy.excercise();
timmy.excercise();

// The factory pattern is a creational design pattern that provides a generic interface
//for creating objects. In the factory pattern, we can specify the type of object being created and we do not need to explicitly require a constructor.
// Factory gives us an object creation mechanism that is both flexible and reusable.

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  constructor() {
    this.dinnerSet = [];
  }
  makeDinner(arg1, arg2, arg3) {
    let newDinner = new Dinner(
      (Dinner.appetizer = arg1),
      (Dinner.entree = arg2),
      (Dinner.dessert = arg3)
    );
    this.dinnerSet.push(newDinner);
    return newDinner;
  }
}

let cheffy = new Chef();
cheffy.makeDinner("oysters", "lobster roll", "chocolate souffle");

console.log(cheffy.dinnerSet);
