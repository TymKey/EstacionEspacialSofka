/* Clase principal con propiedades y metodos basicos */
class Vehicle {
  /* Instanciamiento local de las propiedades */
  constructor(speed, name, color) {
    this.speed = speed;
    this.name = name;
    this.color = color;
  }

  /* Metodos de clase */
  turnOn() {
    console.log("the vehicle is on");
  }

  /* Metodos de clase */
  turnOff() {
    console.log("the vehicle is off");
  }
}

/* Herencia de la clase principal para crear la clase Ship */
export class Ship extends Vehicle {
  /* Instanciamiento de las propiedades de la clase padre y las propiedades de la clase Ship */
  constructor(category, creatorCountry, speed, name, color) {
    super(speed, name, color);
    this.category = category;
    this.creatorCountry = creatorCountry;
  }

  /* Metodo adicional */
  deploy() {
    console.log("the ship is deploy");
  }

  /* Metodo adicional */
  takePictureFromSpace() {
    console.log("the ship took a picture");
  }
}
