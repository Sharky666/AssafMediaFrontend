export default class Player {
    constructor(entity) {
        this._entity = entity;
    }

    setDestination(location) {
        this._entity.destination = location;
    }

    get entity() {
        return this._entity;
    }
}