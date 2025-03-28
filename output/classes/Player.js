export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.name;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
