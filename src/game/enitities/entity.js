class Entity {
    // TODO: implement a feature that simply gives you the center of the entity when asking for it's location
    constructor(img, location) {
        this.img = this.prepareGraphics(img);
        this.location = location;
        window.playerPos = location;
    }

    stepToDestination() {
        const xDifference = this.location.x - this.destination.x;
        const yDifference = this.location.y - this.destination.y;
        /**The following if statements check whether the player need to travel in a certain axis (X or Y)
         * If there is a need to tavel the statements will either add or substract 1 to the correlated axis and then return.
         * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
         */
        if (xDifference !== 0) {
            this.location.x -= (Math.sign(xDifference) * 5);
            return;
        }
        if (yDifference !== 0) {
            this.location.y -= (Math.sign(yDifference) * 5);
            return;
        }
        // TODO: a callback to RXJS or something that notifies that we have arrived
        // We have arrived, let's mark the destination as null so we won't run redundant methods
        console.log('Player Arrived!');
        this.destination = null;
    }

    stepIfRequired() {
        if (this.destination) {
            this.stepToDestination();
        }
    }

    update() {
        this.stepIfRequired();
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.location.x, this.location.y);
    }

    prepareGraphics(img) {
        const image = document.createElement('img');
        image.src = img;
        return image;
    }

    getLocation() {
        return this.location;
    }
}

export default Entity;