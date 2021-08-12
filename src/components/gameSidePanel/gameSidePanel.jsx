import React from 'react';
import './gameSidePanel.css'
import GameService from '../../game/gameService';

const GameSidePanel = props => {
      function onRollButtonClick() {
        GameService.rollDice();
      }
      
    return (
        <div className="gameSidePanel">
            <button className="roll-button" onClick={onRollButtonClick}>Roll</button>
        </div>
    )
}

export default GameSidePanel;