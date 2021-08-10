import Entity from "../entity";
import wave from "../../assets/wave.png"

export class Wave extends Entity {
    constructor(location) {
        super(wave, location);
    }
}