import Entity from "../entity";
import sea from "../../assets/images/sea.png"

class Sea extends Entity {

    constructor(location) {
        const size = {
            width: 0,
            height: 0
        }
        super(sea, location, size);
    }
};

export default Sea;