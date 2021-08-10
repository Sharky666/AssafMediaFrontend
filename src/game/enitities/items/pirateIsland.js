import Entity from "../entity";
import pirateIsland from "../../assets/01-island.png";

class PirateIsland extends Entity {
    constructor(location) {
        super(pirateIsland, location);
    }
}

export default PirateIsland;