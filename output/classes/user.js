export class User {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    programming() {
        console.log(`${this.name} from ${this.country} is a Developer`);
    }
}
