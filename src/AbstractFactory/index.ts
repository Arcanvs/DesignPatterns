// Interface comun
interface Button {
    click(): string;
}

interface Checkbox {
    check(): string;
}

// Interface abstracta de la fabrica
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Fabricas concretas
class windowsFactory implements GUIFactory {
    public createButton(): Button {
        return new windowsButton();
    }

    public createCheckbox(): Checkbox {
        return new windowsCheckbox();
    }
}

class macFactory implements GUIFactory {
    public createButton(): Button {
        return new macButton();
    }
    
    public createCheckbox(): Checkbox {
        return new macCheckbox();
    }
}

// Productos concretos
class windowsButton implements Button {
    public click(): string {
        return "Click en Windows";
    }
}

class windowsCheckbox implements Checkbox {
    public check(): string {
        return "Check en Windows";
    }
}

class macButton implements Button {
    public click(): string {
        return "Click en Mac";
    }
}

class macCheckbox implements Checkbox {
    public check(): string {
        return "Check en Mac";
    }
}

// Cliente
function clienteAF(factory: GUIFactory){ 
    console.log(factory.createButton().click());
    console.log(factory.createCheckbox().check());
}

// Ejecucion segun configuracion
let config = "mac";
if(config === "windows"){
    clienteAF(new windowsFactory());
}else if(config === "mac"){
    clienteAF(new macFactory());
}
