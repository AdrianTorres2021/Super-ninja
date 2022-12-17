class Ninja{
    constructor(nombre, salud){    
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
}
    
    sayName(nombre){
        console.log(`Me llamo ${this.nombre}`);
    }
    showStats(){
        console.log(`nombre: ${this.nombre}, salud: ${this.salud}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`)
    }
    drinkSake(){
        this.salud += 10;
        console.log(`Salud aumentada a ${this.salud}`)
    }
}


class Sensei extends Ninja{
    constructor(nombre){
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    showStats(){
        super.showStats();
    }
}
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"