
class Singleton {
    private constructor(){}
    private static instance: Singleton;

    public static getInstance(): Singleton {
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public saludar(saludo: string) : void {
        console.log(saludo);
    }
}

function clienteSingleton(){
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log(instance1, ' -- ', instance2);
    console.log(instance1 === instance2);

    instance1.saludar('Hola');
    instance2.saludar('Hello');  
}

clienteSingleton();