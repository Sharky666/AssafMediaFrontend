import Entity from "../entity";
import island from "../../assets/images/06-island.png";

class Island extends Entity {
    constructor(location) {
        const size = {
            width: 640,
            height: 600
        }
        super(island, location, size);
    }
}

export default Island;