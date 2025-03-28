import {IsPlayer} from '../interfaces/IsPlayer.js'
export class Player implements IsPlayer {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  getProperty() {
    return this.name;
  }
  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }

}
