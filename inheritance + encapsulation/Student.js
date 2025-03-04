class Student extends Person {
    
    #id;
    #course;

    constructor(name, age, email, id, course) {
        super(name, age, email);
        this.#id = id;
        this.#course = course;
    } 
    getId() {
        return this.#id;      
    }
    getCourse() {
        return this.#course;
    }
}
