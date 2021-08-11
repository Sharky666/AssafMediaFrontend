import Entity from "../entity";
import tressureIsland from "../../assets/images/04-island.png";

class TressureIsland extends Entity {
    constructor(location) {
        const size = {
            width: 650,
            height: 580
        }
        super(tressureIsland, location, size);
    }
}

export default TressureIsland;