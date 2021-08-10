import Entity from "./entity";
import pirate from '../assets/pirate.png';

class Pirate extends Entity {
    constructor(location) {
        super(pirate, location);
    }
}

export default Pirate;