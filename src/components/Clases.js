function persona(nombre) {
  this.nombre = nombre;
  console.log("Hola, soy " + nombre);
}
// instancia de la clase persona.
// llamar para poder acceder a los metodos
// y propiedades que tenga esta clase, el objeto

let objetoPersona = new persona("Brayan Cruz");
const Clases = () => {
  return console.log(objetoPersona);
};

export default Clases;
