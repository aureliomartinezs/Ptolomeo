
////////////////////////////
//// CLASES y HERENCIA
////////////////////////////

class Equip {
    constructor(nombre, apellido, salario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }
    //Métodos
    mostrarSalario(){
        return console.log(this.salario);
    }
}

class Jugador extends Equip {
    constructor(nombre, apellido, salario, edad, posicion, dorsal) {
        super(nombre, apellido, salario);
            this.edad = edad;
            this.posicion = posicion;
            this.dorsal = dorsal;
    }
}

class Entrenador extends Equip {
    constructor(nombre, apellido, salario, caracter, cargo){
        super(nombre, apellido, salario);
            this.caracter = caracter;
            this.cargo = cargo;
    }
}

const LJ = new Jugador("LeBron", "James", 56000000, 39, "Alero", 6);

const LAKERS = new Entrenador("Brown", "Dow", 1000000, 46, "Puñetero pero bien", "Entrenador principal");

console.log(LJ, LAKERS);

LJ.mostrarSalario();

// Falta recorrer el OBJETO FOR ... IN
