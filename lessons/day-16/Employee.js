//Template Data Model / User-defined data
class Employee {

    constructor(salary){
        this._salary = salary;
    }
    //setters
    set salary(salary) {
        this._salary = salary;
    }

    //getter
    get salary(){
        return this._salary;
    }
}

let teo = new Person("An", 18);
console.log(teo);
//Invoke setter
teo.name = "ti";
console.log(teo.name);



//1. Init property values when creating an object -> constructor
//2. Setter(s) - methods: Set value for properties