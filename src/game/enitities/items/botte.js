import Entity from "../entity";
import bottle from "../../assets/05-island.png";

class Bottle extends Entity {
    constructor(location) {
        super(bottle, location);
    }
}

export default Bottle;