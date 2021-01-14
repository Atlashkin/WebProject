import React from 'react';
import {useDispatch} from "react-redux";
import './Game.css';
import fine1 from '../../assets/img/fine4/fine1.png'
const Game = () => {

    const dispatch = useDispatch()

    return (
        <div className='game'>
            <img src={fine1} alt="" className="fine1"/>

            <div className="game_pers"></div>
            <div className="game_dialog" >диалог</div>

        </div>
    );
};

export default Game;