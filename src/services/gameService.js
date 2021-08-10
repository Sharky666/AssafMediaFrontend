import Pirate from '../enitities/pirate';

const entities = [];
let ctx = null;

const GameService = {
    initializeGame: function(ctx) {
        setCtx(ctx);
        initializeEntities();
        // TODO: request animation frame
        setInterval(() => {
            this.step();
            this.render();
        }, 0);
    },

    step: function(){
        entities.forEach(entity => {
            entity.update();
        });
    },

    render: function() {
        this.clearCanvas();
        entities.forEach(entity => {
            entity.draw(ctx);
        });
    },

    clearCanvas: function() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

};

function initializeEntities() {
    entities.push(new Pirate({
        x: 50,
        y: 50
    }));
};

function setCtx(_ctx) {
    ctx = _ctx;
}

export default GameService;