import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, repassword, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <Input value={repassword} setValue={setPassword} type="password" placeholder="Повторите пароль..."/>
            <button className="registration__btn" onClick={() => registration(email, password)}>Войти</button>
        </div>
    );
};

export default Registration;