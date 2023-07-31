// Interface comun para todos objetos
interface Animal {
    makeSound(): string;
}

// Creator, clase creadora Factory Method
abstract class AnimalFactory {
    public abstract createAnimal(): Animal;

    public makeSound(): string {
        const animal = this.createAnimal();
        return `El animal hace ${animal.makeSound()}`;
    }
}

// Concrete Creators, sobreescribe el Factory Method para retornar un tipo diferente
class DogFactory extends AnimalFactory {
    public createAnimal(): Animal {
        return new Dog();
    }
}

class FishFactory extends AnimalFactory {
    public createAnimal(): Animal {
        return new Fish();
    }
}

// Concrete Products, diferentes implementaciones de la interface
class Dog implements Animal {
    public makeSound(): string {
        return "Guau guau!!!"
    }
}

class Fish implements Animal {
    public makeSound(): string {
        return "Glup glup!!!"
    }
}

// Cliente
function clienteFM(factory: AnimalFactory){
    console.log(factory.makeSound());
}

clienteFM(new DogFactory());
clienteFM(new FishFactory());