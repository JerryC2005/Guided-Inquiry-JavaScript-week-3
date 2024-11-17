// person 
class person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    excercise() {
        console.log("Working out is fun!");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}.`);
    }
}

class Programmer extends person {
    constructor(name, job, age, languages = []) {
        super(name, job, age); //calls parent constructor
        this.languages = languages; //added properties
        this.busy = true; //default property
    }

    completeTask() {
        this.busy = false
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    } 

    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

    listLanguages() {
        console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}`);
    }

}

const person1 = new person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());


console.log(c1);
console.log(c2);
console.log(c3);

console.log(person1);
person1.excercise();
person1.fetchJob();