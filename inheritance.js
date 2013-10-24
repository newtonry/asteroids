Function.prototype.inherits = function(parentClass) {
  function Surrogate () {};

  Surrogate.prototype = parentClass.prototype;

  this.prototype = new Surrogate();
}

// function MovingObject() {};
//
// function Ship () {};
// Ship.inherits(MovingObject);

// function Animal(name) {
//   this.name = name;
// };
//
// Animal.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.name);
// };
//
// function Dog(name, age) {
//   Animal.call(this,name); // super
//   this.age = age
// };
//
// Dog.inherits(Animal)
//
// Dog.prototype.bark = function () {
//   console.log("Bark!");
// };
//
// fido = new Dog("Fido",7);
// console.log(fido.age);
// console.log(fido.sayHello());