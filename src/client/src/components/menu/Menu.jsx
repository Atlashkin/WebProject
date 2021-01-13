import React, {useState} from 'react';

import './Menu.css';
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";



const Menu = () => {

    const dispatch = useDispatch()

    return (
        <div className='menu'>
            <div className="menu__header">Главное меню</div>
            <button className="menu__btn" >Продолжить игру</button>
            <button className="menu__btn" >Новая игра</button>
            <button className="menu__btn" >Статистика</button>
            <button className="menu__btn" >Редактор сценариев</button>
        </div>
    );
};

export default Menu;