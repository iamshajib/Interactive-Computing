function setup() {
  createCanvas(500,500);
  text("Nothing to see! Check the JavaScript Console", 25, 25);

  // this is our 'blueprint' for a Pokemon1
  class Pokemon1 {

    // this is a constructor - this function will run when we create a new
    // object using this class. think of it like the 'setup' function in your
    // sketch, but for an object
    constructor() {
      // set up the object to have a property of 'name' and a value of 'Pikachu'
      this.name = 'Pikachu';
      // set up a 'hitPoints' property with a random value
      this.hitPoints = int( random(10,50) );
    }

    // the object should also have a sayHi function
    sayHi() {
      // when called, this function will announce the current value of
      // its name and hitPoints properties
      console.log('Hello, my name is ' + this.name);
      console.log('I have ', this.hitPoints + ' hit points');
    }
  }

  // build a new object using this class - the object being created is stored
  // in the variable 'a'
  var a = new Pokemon1();
  console.log(a); // the whole object that was built using the class

  console.log(a.name);  // Pikachu
  console.log(a.hitPoints); // random number
  a.sayHi();  // Hello, my name is Pikachu
              // I have [random number] hit points


  // we can build another object using the same class
  var b = new Pokemon1();
  // update the name of this object
  b.name = 'Charmander';
  console.log(b); // the whole object built using the class
  b.sayHi();  // Hello, my name is Charmander
              // I have [random number] hit points

  console.log(a.name, b.name);  // Pikachu Charmander -- note how changing 1 object doesn't change any other object




  // constructors can also be set up to accept arguments from outside of the class
  class Pokemon2 {

    // when we build a new Pokemon2 we will be sending the class the name of the desired pokemon
    constructor(desiredName) {
      this.name = desiredName;
      this.hitPoints = int(random(10,50));
    }

    sayHi() {
      console.log(this.name, this.hitPoints);
    }
  }

  var c = new Pokemon2('Squirtle');
  var d = new Pokemon2('Bulbasaur');
  c.sayHi();
  d.sayHi();

}

function draw() {
}
