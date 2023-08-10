// Declara el método clone() en la interfaz del prototipo
interface Cloneable {
    clone(): Cloneable;
}

// Implementa el método clone() en la clase concreta
class Trooper implements Cloneable {
    public name: string;
    public weapon: string;
    public armor: string;
    
    // Constructor recibe los atributos de la clase
    constructor(name: string, weapon: string, armor: string) {
        this.name = name;
        this.weapon = weapon;
        this.armor = armor;
    }

    // Metodo clone() devuelve un clon del objeto
    public clone(): this {
        const trooper = Object.create(this);
        
        trooper.name = this.name;
        trooper.weapon = this.weapon;
        trooper.armor = this.armor;
        
        return trooper;
    }
}

// Cliente
function clientKamino(){
    const trooper1 = new Trooper('CT-5555', 'DC-15A', 'Phase I');
    const trooper2 = trooper1.clone();
    trooper2.name = 'CT-5597';
    const trooper3 = trooper2.clone();
    trooper3.name = 'CT-5598';
    
    console.log(trooper1);
    console.log(trooper2);
    console.log(trooper3);
}

clientKamino();