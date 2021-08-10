import Entity from "../entity";
import rumIsland from "../../assets/02-island.png"

export class RumIsland extends Entity {
    constructor(location) {
        super(rumIsland, location);
    }
}

export default RumIsland;