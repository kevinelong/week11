class Person{ // DEFINE A CLASS "TEMPLATE" - custom data type
    constructor(first, last){ //CALLED WHEN A NEW INSTANCE - THE RECIPE
        this.first = first;
        this.last = last;
    }
    full(){
        return this.last + ", " + this.first;
    }
    setLast(replacement){
        console.log("CONGRATULATIONS!!!");
        this.last = replacement;
    }
}
let p = new Person("Kevin", "Long"); //CREATE AN INSTANCE (AKA CALL THE CONSTRUCTOR)
console.log( p.full() ); //call method dont forget parens.
p.setLast("Marie"); //replace the last name on this instance p
p.last = "Marie"; //NO EXTRA MESSAGE FROM setLast
console.log( p.full() ); //call method dont forget parens.

class CasualPerson extends Person{ //INHERIT FROM BASE Person
    //USE EXISTING CONSTRUCTOR
    //OVERRIDE/REPLACE THE OLD FULL METHOD
    full(){
        return this.first + " " + this.last;
    }
}
let cp = new CasualPerson("Kevin", "Long"); //CREATE AN INSTANCE (AKA CALL THE CONSTRUCTOR)
console.log( cp.full() ); //call method dont forget parens.

class FormalPerson extends Person{//INHERIT FROM BASE Person
    constructor(first, last, middle){
        super(first, last); // CALL PARENT/SUPER-CLASS's CONSTRUCTOR
        this.middle = middle;
    }
    full(){
        return this.last + ", " + this.first + " " + this.middle;
    }
}

let fp = new FormalPerson("Kevin", "Long", "Ernest");
console.log(fp.full());
