import Entity from "../entity";
import bottle from "../../assets/images/05-island.png";

class Bottle extends Entity {
    constructor(location) {
        const size = {
            width: 280,
            height: 120
        }
        super(bottle, location, size);
    }
}

export default Bottle;