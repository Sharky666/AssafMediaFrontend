import Pirate from './enitities/items/pirate';
import PirateIsland from './enitities/items/pirateIsland';
import RumIsland from './enitities/items/rumIsland';
import Sea from './enitities/items/sea';
import Player from './player';

const entities = [];
let windowCtx = null;
let worldCtx = null;
let worldCanvas = null;
const worldDimensions = {
    width: 3239,
    height: 2179,
};
const player = new Player(new Pirate({
    x: 250,
    y: 250
}));
const GameService = {
    initializeGame: function(windowCtx) {
        setWindowCtx(windowCtx);
        this.initializeWorldCtx();
        initializeEntities();
        window.requestAnimationFrame(animationFrameCallback);
    },

    step: function(){
        entities.forEach(entity => {
            entity.update();
        });
    },

    render: function() {
        this.clearCanvas();
        entities.forEach(entity => {
            entity.draw(worldCtx);
        });
        const worldLocation = this.getWorldCameraLocation();
        windowCtx.drawImage(worldCanvas, worldLocation.x, worldLocation.y);
    },

    clearCanvas: function() {
        windowCtx.fillStyle = "#0074dc";
        windowCtx.fillRect(0, 0, windowCtx.canvas.width, windowCtx.canvas.height);
        worldCtx.clearRect(0, 0, worldDimensions.width, worldDimensions.height);
    },

    initializeWorldCtx: function() {
        worldCanvas = document.createElement('canvas');
        worldCtx = worldCanvas.getContext('2d');
        worldCtx.canvas.width = worldDimensions.width;
        worldCtx.canvas.height = worldDimensions.height;
    },

    getWorldCameraLocation: function() {
        const playerLocation = player.entity.getLocation();
        return {
            x: Math.min((windowCtx.canvas.width / 2) + -(playerLocation.x) - 91, 0),
            y: Math.min((windowCtx.canvas.height / 2) + -(playerLocation.y) - 136, 0)
        }
    }
};

function animationFrameCallback() {
    GameService.step();
    GameService.render();
    window.requestAnimationFrame(animationFrameCallback);
};

function initializeEntities() {
    entities.push(new Sea({
        x: 0,
        y: 0
    }));
    entities.push(new PirateIsland({
        x: 250,
        y: 250
    }));
    entities.push(new RumIsland ({
        x: 250,
        y: 900
    }))
    entities.push(player.entity);
};

function setWindowCtx(_ctx) {
    windowCtx = _ctx;
}

export default GameService;