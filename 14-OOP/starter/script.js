'use strict';
// // constructor Function
// const person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do this
//   // this.calcAge = function () {
//   //   console.log(2021 - this.birthYear);
//   // };
// };

// const jonas = new person('jonas', 1991);
// const parth = new person('parth', 1999);
// const himu = new person('himu', 2002);

// //instance of
// console.log(himu instanceof person);

// /////////////////////////
// ////////Prototypes///////
// /////////////////////////

// console.log(person.prototype);

// person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// himu.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === person.prototype);
// console.log(jonas.__proto__ === person); //false

// //.prototypeOfLinkObjects

// person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, himu.species);

//hasOwnProperty METHOD

// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species')); //fales

// ////////////////////////////////////////
// ///////////Coding Challenge////////////

// const car = function (carName, speed) {
//   this.carName = carName;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.carName} is going ${this.speed} km/h`);
// };
// car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.carName} is going ${this.speed} km/h`);
// };

// const bmw = new car('BMW', 120);
// const mercedes = new car('mercedes', 90);

// bmw.accelerate();
// bmw.accelerate();
// bmw.break();

/////////////////////////////////////////////
/////////////////ES6 Classes/////////////////
/////////////////////////////////////////////

// class experssion
// const personcl = class{}

// //class declaration
// class personcl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }
// }

// const himanshu = new personcl('himanshu', 2002);
// console.log(himanshu);
// himanshu.calcAge();

// console.log(himanshu.__proto__ === personcl.prototype);

///////////////////////////////////////////
////////////object.create//////////////////
///////////////////////////////////////////

//

// ///coding challenge 2
// class carcl {
//   constructor(carName, speed) {
//     this.carName = carName;
//     this.speed = speed;
//   }

//   accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.carName} is going ${this.speed} km/h`);
//   };
//   break = function () {
//     this.speed -= 5;
//     console.log(`${this.carName} is going ${this.speed} km/h`);
//   };
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new carcl('ford', 120);
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

//////////////////////////////////
/////////////diffrence////////////

// constructor Function
// const person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const student = function (firstName, birthYear, course) {
//   person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //linking prototypes
// student.prototype = Object.create(person.prototype);

// student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new student('mike', 2020, 'computer science');

// mike.introduce();
// mike.calcAge();

///////////////////////////////////////
///////coding challenge////////////////
///////////////////////////////////////

// const car = function (carName, speed) {
//   this.carName = carName;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.carName} is going ${this.speed} km/h`);
// };
// car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.carName} is going ${this.speed} km/h`);
// };

// const EV = function (carName, speed, charge) {
//   car.call(this, carName, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.carName} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };
// const tesla = new EV('tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
// tesla.accelerate();
////

/////////////////////////////////////////////////
////inheritance Between "classes" : classes/////
///////////////////////////////////////////////

// class personcl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.fullName}`);
//   }
//   get age() {
//     return 2021 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullname = name;
//     else console.log(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullname;
//   }

//   //Static method
//   static hey() {
//     console.log('hey there');
//   }
// }

// class studentcl extends personcl {
//   constructor(fullName, birthYear, course) {
//     //first do this
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   //adding new method to child
//   introduce() {
//     console.log(`My name is ${this._fullname} and I study ${this.course}`);
//   }
//   // overright the method
//   calcAge() {
//     console.log(
//       `I am ${2021 - this.birthYear} years old, but as a student i feel ${
//         2021 - this.birthYear + 10
//       } `
//     );
//   }
// }

// const himu = new studentcl('himu ramani', 2002, 'bca');
// himu.introduce();
// himu.calcAge();

////////////////////////////////////////////////////////
///////Inheritence between 'classes': object.create/////
////////////////////////////////////////////////////////

// const personProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(personProto);
// const studentProto = Object.create(personProto);
// studentProto.init = function (firstName, birthYear, course) {
//   personProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// studentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(studentProto);
// jay.init('jay', 2002, 'BCA');
// jay.init();
// jay.introduce();
// jay.calcAge();

////////////////////////////////////////////////////////////////////////Another classes Example///////////////////
/////////////////////////////////////////////////////////

///Encapculation
// 1) Private fields
// 2) Public feilds
// 3) Public methods
// 4) Private methods

// class Account {
//   //public feilds
//   // this.locale = navigator.language;

//   //Privte feilds
//   // #movments = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     //Protected
//     // this._pin = pin;
//     this._movements = [];
//     // this.locale = navigator.language;
//     this.#pin = pin;

//     console.log(`Thanks for opening an accout ${owner}`);
//   }
//   // Public interface & Public methods
//   getMovements() {
//     return this._movements;
//   }

//   deposite(val) {
//     this._movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposite(-val);
//     return this;
//   }
//   // private methods
//   approveLoan(val) {
//     return true;
//   }

//   requestedLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposite(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }
// }

// const acc1 = new Account('himanshu', 'RS', 1111);

// acc1.deposite(250);
// acc1.withdraw(250);
// acc1.approveLoan(1000);
// acc1.requestedLoan(1000);
// // console.log(acc1.getMovements);
// console.log(acc1);

// //Chaining
// acc1.deposite(100).deposite(500).withdraw(300).requestedLoan(500);
// console.log(acc1);

//////////////////////////////////////////////
/////////////coding Challenge #4/////////////
//////////////////////////////////////////////

// const car = function (carName, speed) {
//   this.carName = carName;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.carName} is going ${this.speed} km/h`);
// };
// car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.carName} is going ${this.speed} km/h`);
// };

// const EV = function (carName, speed, charge) {
//   car.call(this, carName, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.carName} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };
// const tesla = new EV('tesla', 120, 23);
// tesla.chargeBattery(90)r;
// console.log(tesla);
// tesla.break();
// tesla.accelerate();
////

// class carcl {
//   constructor(carName, speed) {
//     this.carName = carName;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.carName} is going at ${this.speed} km/h`);
//     return this;
//   }
//   break() {
//     this.speed -= 5;
//     console.log(`${this.carName} is going at ${this.speed}`);
//     return this;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     return this.speed * 1.6;
//   }
// }

// class EVCL extends carcl {
//   #charge;
//   constructor(carName, speed, charge) {
//     super(carName, speed);
//     this.#charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.carName} is going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }
// }

// const rivian = new EVCL('rivian', 120, 23);
// console.log(rivian);
// rivian.accelerate().accelerate().break().chargeBattery(30).accelerate();

//object function

let himanshu = {
  name: 'himanshu',
  walk: function () {
    console.log('hi i am walking');
  },
};

class himu {
  constructor(firstname) {
    this.firstname = firstname;
  }
  walk() {
    console.log('walking');
  }
}

console.log(himanshu);
console.log(himu.prototype);
