import Entity from "../entity";
import rumIsland from "../../assets/images/02-island.png"

export class RumIsland extends Entity {

    constructor(location) {
        const size = {
            width: 450,
            height: 250
        }
        super(rumIsland, location, size);
    }
}

export default RumIsland;