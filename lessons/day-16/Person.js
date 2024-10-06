//Template Data Model / User-defined data
class Person {

    /**
     * _name
     * _age
     */
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    //setters

    set name(name) {
        this._name = name;
    }

    //getter
    get name(){
        return this._name;
    }
}

let teo = new Person("An", 18);
console.log(teo);
//Invoke setter
teo.name = "ti";
console.log(teo.name);



//1. Init property values when creating an object -> constructor
//2. Setter(s) - methods: Set value for properties