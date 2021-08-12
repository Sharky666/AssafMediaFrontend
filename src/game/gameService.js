import config from '../config';
import httpService from '../services/httpService';
import Bottle from './enitities/items/botte';
import Dragon from './enitities/items/dragon';
import Island from './enitities/items/island';
import Pirate from './enitities/items/pirate';
import PirateIsland from './enitities/items/pirateIsland';
import RumIsland from './enitities/items/rumIsland';
import Sea from './enitities/items/sea';
import TressureIsland from './enitities/items/tressureIsland';
import Wave from './enitities/items/wave';
import Player from './player';

const rollDiceUrl = `${config.serverAdress}/game/roll`;
const getLastRollUrll = `${config.serverAdress}/game/lastRoll`;

const entities = [];
const entitiesMap = {

};
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
        initializeWorldCtx();
        initializeEntities();
        window.requestAnimationFrame(animationFrameCallback);
        player.setDestinationEntity(entitiesMap[3]);
    },

    getWorldCameraLocation: function() {
        const playerLocation = player.entity.getLocation();
        return {
            x: Math.min((windowCtx.canvas.width / 2) + -(playerLocation.x) - 91, 0),
            y: Math.min((windowCtx.canvas.height / 2) + -(playerLocation.y) - 136, 0)
        }
    },

    rollDice: function(){
        httpService.get(rollDiceUrl).then(diceRoll => {
            console.log(diceRoll);
            player.entity.setDestinationEntity(entitiesMap[diceRoll]);
        })
    }
};

const playerArrivedAtDestinationSubscription = player.entity.arrivedAtDestinationEntity$.subscribe( entity => {
    console.log(entity);
});

function animationFrameCallback() {
    step();
    render();
    window.requestAnimationFrame(animationFrameCallback);
};

function initializeEntities() {
    setBackgroundEntities();
    setEntitiesMap();
    entitiesMap[7] = player.entity;
    entities.push(...Object.values(entitiesMap));
};

function step(){
    entities.forEach(entity => {
        entity.update();
    });
};

function render() {
    clearCanvas();
    entities.forEach(entity => {
        entity.draw(worldCtx);
    });
    const worldLocation = GameService.getWorldCameraLocation();
    windowCtx.drawImage(worldCanvas, worldLocation.x, worldLocation.y);
};

function clearCanvas() {
    windowCtx.fillStyle = "#0074dc";
    windowCtx.fillRect(0, 0, windowCtx.canvas.width, windowCtx.canvas.height);
    worldCtx.clearRect(0, 0, worldDimensions.width, worldDimensions.height);
};

function initializeWorldCtx() {
    worldCanvas = document.createElement('canvas');
    worldCtx = worldCanvas.getContext('2d');
    worldCtx.canvas.width = worldDimensions.width;
    worldCtx.canvas.height = worldDimensions.height;
};

function setBackgroundEntities() {
    entities.push(...[
        new Sea({
            x: 0,
            y: 0
        }),
        new Wave({
            x: 0,
            y: 0
        })
    ]);
};

function setEntitiesMap() {
    entitiesMap[1] = new PirateIsland({
        x: player.entity.getLocation().x + player.entity.getSize().width / 2,
        y: player.entity.getLocation().y + player.entity.getSize().height
    });
    entitiesMap[2] = new RumIsland({
        x: 1300,
        y: 240
    });
    entitiesMap[3] = new Dragon({
        x: 2000,
        y: 350
    });
    entitiesMap[4] = new TressureIsland({
        x: 1400,
        y: 640
    });
    entitiesMap[5] = new Bottle({
        x: 250,
        y: 1200
    })
    entitiesMap[6] = new Island({
        x: 2500,
        y: 1500
    });
};

function setWindowCtx(_ctx) {
    windowCtx = _ctx;
}

function destroy() {
    playerArrivedAtDestinationSubscription.unsubscribe();
}

export default GameService;