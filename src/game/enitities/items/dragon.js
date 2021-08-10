import Entity from "../entity";
import dragon from "../../assets/03-island.png";

class Dragon extends Entity {
    constructor(location) {
        super(dragon, location);
    };
}

export default Dragon;