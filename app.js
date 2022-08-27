console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    
    
    costructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    
    addHobby(newHobby) {
        this.hobbies.push(newHobby);
    }

    removeHobby(oldHobby) {
        this.hobbies = this.hobbies.filter((hobby) => hobby != oldHobby);
        //array to go thru hobbies?
    }

    greet(name) {
        console.log(`Hello reg person ${name}`);
    };;

    info(){

    };

    soundOff() {

    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greet(name) {
        console.log(`Hello coder ${name}`);
    }

}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


let p = new Person("Kelly",0,"Here",["dance","coding"]);
let c = new Coder("Ben",12,"there","too much tv     x");

console.log(p.greet("Kelly"));
console.log(c.greet("Ben"));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calulator {
    
    /* constructor(num1, num2, operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;

        this.result = 0;
    } */

    result = 0;

    add(a,b) {
        if (b===undefined) {
            this.result += a;
        }
        else {
            this.result = a + b;
        }
        return this.result;
    }

    mulitply(a,b) {
        if (b===undefined) {
            this.result *= a;
        }
        else {
            this.result = a * b;
        }
        return this.result;
    }
    subtract(a,b) {
        if (b===undefined) {
            this.result -= a;
        }
        else {
            this.result =  a - b;
        }
        return this.result;
    }
    divide(a,b) {
        if (b===undefined) {
            this.result /= a;
        }
        else {
            this.result =  a / b;
        }
        return this.result;
    }

    clear() {
        this.result = 0;
    }

    /* calculate(a, b, action) {
        let num1 = parseFloat(a);
        let num2 = parseFloat(b);

        if (isNaN(a) || isNaN(b)) {
            return null;
        }

        action(a,b);

    }


    */
    displayResult(){
        console.log(this.result);
    }

}

let calc = new Calulator();
calc.add(4,5);
calc.displayResult();
calc.subtract(6,8);
calc.displayResult();
calc.clear();
calc.displayResult();
