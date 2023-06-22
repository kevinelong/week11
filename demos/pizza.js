//PIZZA
class SauceType{ //ENUM ENUMERATION
    static RED="Red";
    static WHITE="White";
    static CLAM="Clam";
}
class CheeseType{ //ENUM ENUMERATION
    static ITALIAN="Italian";
    static AMERICAN="American";
}
class Topping{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}
class Mushrooms extends Topping{ // IS A - INHERITANCE
    constructor(){
        super("Mushrooms", 1.00)
    }
}
class Pineapple extends Topping{ // IS A - INHERITANCE
    constructor(){
        super("Pineapple", 1.00)
    }
}
class Pizza{
    constructor(){
        this.cheeseType = CheeseType.ITALIAN; // HAS A - COMPOSITION
        this.sauceType = SauceType.RED; // HAS A - COMPOSITION
        this.toppingsList = []; // HAS A  - COMPOSITION
    }
}
p = new Pizza()
p.toppingsList.push(new Mushrooms())
p.toppingsList.push(new Pineapple())

console.log(p.sauceType)
console.log(p.toppingsList)


