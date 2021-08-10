export default class Player {
    constructor(entity) {
        this._entity = entity;
    }

    get entity() {
        return this._entity;
    }
}