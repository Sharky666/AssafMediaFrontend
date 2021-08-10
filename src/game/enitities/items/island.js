import Entity from "../entity";
import island from "../../assets/06-island.png";

class Island extends Entity {
    constructor(location) {
        super(island, location);
    }
}

export default Island;