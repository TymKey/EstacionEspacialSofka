class Vehicle {
  constructor(speed, name, color) {
    this.speed = speed;
    this.name = name;
    this.color = color;
  }

  turnOn() {
    console.log("the vehicle is on");
  }

  turnOff() {
    console.log("the vehicle is off");
  }
}

export class Ship extends Vehicle {
  constructor(category, creatorCountry, speed, name, color) {
    super(speed, name, color);
    this.category = category;
    this.creatorCountry = creatorCountry;
  }

  deploy() {
    console.log("the ship is deploy");
  }

  takePictureFromSpace() {
    console.log("the ship took a picture");
  }
}
