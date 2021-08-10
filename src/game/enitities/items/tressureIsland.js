import Entity from "../entity";
import tressureIsland from "../../assets/04-island.png";

class TressureIsland extends Entity {
    constructor(location) {
        super(tressureIsland, location);
    }
}

export default TressureIsland;