export class User {
    constructor(
        private name: string,
        public age: number,
        readonly country: string
    ) {}

    programming() {
        console.log(`${this.name} from ${this.country} is a Developer`);
    }
}