import Entity from "../entity";
import pirateIsland from "../../assets/images/01-island.png";

class PirateIsland extends Entity {
    constructor(location) {
        const size = {
            width: 250,
            height: 100
        }
        super(pirateIsland, location, size);
    }
}

export default PirateIsland;