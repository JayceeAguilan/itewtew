class Student extends Person {
    
    #id;

    constructor(name, age, email, id) {
        super(name, age, email);
        this.#id = id;
    } 
    getId() {
        return this.#id;      
    }
}