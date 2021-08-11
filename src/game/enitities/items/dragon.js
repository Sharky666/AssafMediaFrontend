import Entity from "../entity";
import dragon from "../../assets/images/03-island.png";

class Dragon extends Entity {
    constructor(location) {
        const size = {
            width: 490,
            height: 320
        }
        super(dragon, location, size);
    };
}

export default Dragon;