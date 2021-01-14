import React, {useState} from 'react';
import Input from "../../utils/input/Input";

const Popup = () => {
    const [scenarioName, setScenarioName] = useState('')
    const [scenarioDesc, setScenarioDesc] = useState('')


    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__header">
                    <div className="popup__title">Добавление нового сценария</div>
                    <button className="popup__close">x</button>
                </div>
                <Input type="text" placeholder="Название" value={scenarioName} setValue={setScenarioName}/>
                <Input type="text" placeholder="Описание" value={scenarioDesc} setValue={setScenarioDesc}/>
                <button className="popup__create">Добавить</button>
            </div>
        </div>
    );
};

export default Popup;