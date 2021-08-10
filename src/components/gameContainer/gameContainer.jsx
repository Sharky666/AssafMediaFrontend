import React from 'react';
import CanvasContainer from '../canvasContainer/CanvasContainer';
import GameSidePanel from '../gameSidePanel/gameSidePanel';
import './gameContainer.css';

const GameContainer = props => {
    return (
        <div className="container">
            <CanvasContainer/>
            <GameSidePanel/>
        </div>
    )
}

export default GameContainer;