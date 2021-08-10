class Entity {
    #img;
    #location = {
        x: null,
        y: null
    };

    constructor(img, location) {
        this.#img = this.prepareGraphics(img);
        this.#location = location;
        this.#destination = {
            x: 500,
            y: 500
        }
    }

    #destination = null;
    stepToDestination() {
        // if we are already travelling somewhere, return
        if (!this.#destination) return;
        const xDifference = this.location.x - this.#destination.x;
        const yDifference = this.location.y - this.#destination.y;
        /**The following if statements check whether the player need to travel in a certain axis (X or Y)
         * If there is a need to tavel the statements will either add or substract 1 to the correlated axis and then return.
         * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
         */
        if (xDifference !== 0) {
            this.#location.x -= Math.sign(xDifference);
            return;
        }
        if (yDifference !== 0) {
            this.#location.y -= Math.sign(yDifference);
            return;
        }
        // TODO: a callback to RXJS or something that notifies that we have arrived
        // We have arrived, let's mark the destination as null so we won't run redundant methods
        this.#destination = null;
    }

    stepIfRequired() {
        if (this.#destination) {
            this.stepToDestination();
        }
    }

    update() {
        this.stepIfRequired();
    }

    draw(ctx) {
        ctx.drawImage(this.#img, this.#location.x, this.#location.y);
    }

    set destination(destination) {
        return this.#destination = destination;
    }

    prepareGraphics(img) {
        const image = document.createElement('img');
        image.src = img;
        return image;
    }

    get location() {
        return this.#location;
    };

    set location(location) {
        this.#location = location;
    };
}

export default Entity;