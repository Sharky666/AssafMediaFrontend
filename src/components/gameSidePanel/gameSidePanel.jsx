import React, {useEffect} from 'react';
import './gameSidePanel.css'
import { fromEvent } from 'rxjs';
import GameService from '../../game/gameService';

const GameSidePanel = props => {

    useEffect(() => {
        const clickEvent$ = fromEvent(document.getElementsByClassName('roll-button'), 'click');
        clickEvent$.subscribe( () => {
            GameService.rollDice();
        });
      }, [])
    
    return (
        <div className="gameSidePanel">
            <button className="roll-button">Roll up!</button>
        </div>
    )
}

export default GameSidePanel;