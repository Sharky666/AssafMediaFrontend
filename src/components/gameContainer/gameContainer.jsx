import React from 'react';
import CanvasContainer from '../canvasContainer/CanvasContainer';
import GameSidePanel from '../gameSidePanel/gameSidePanel';
import './gameContainer.css';
import { Howl, Howler } from 'howler';
import music from '../../game/assets/sounds/music.mp3';

const GameContainer = props => {
const sound = new Howl({
    src: [music],
    loop: true,
  });
  sound.play();
  Howler.volume(0.3);

    return (
        <div className="container">
            <CanvasContainer/>
            <GameSidePanel/>
        </div>
    )
}

export default GameContainer;