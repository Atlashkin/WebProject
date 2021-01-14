import React, {useState} from 'react';
import Input from "../../utils/input/Input";



const EditScene = () => {
    const [sceneName, setSceneName] = useState('')
    const [sceneReplica, setSceneReplica] = useState('')


    return (
        <div className="popup">
            <div className="popup__contentScene">
                <div className="popup__header">
                    <div className="popup__titleScene">Редактирование сцены</div>
                    <button className="popup__close">x</button>
                </div>
                <div>Сцена 1.1</div>

                <Input className="in" type="text" placeholder="Название" value={sceneName} setValue={setSceneName}/>
                <Input className="in" type="text" placeholder="Реплика" value={sceneReplica} setValue={setSceneReplica}/>

                <table className="tabl" width="960" cellPadding="5" cellSpacing="0">
                    <tr>
                        <th width="560">Ответ</th>
                        <th width="200">Стоимость</th>
                        <th width="200">Следующая сцена</th>
                    </tr>
                    <tr >
                        <td className="col" width="550"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                    </tr>
                    <tr >
                        <td className="col" width="550"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                    </tr>
                    <tr >
                        <td className="col" width="550"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                    </tr>
                    <tr >
                        <td className="col" width="550"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                        <td className="col" width="190"><Input/></td>
                    </tr>
                </table>

                <select>
                    <option>Пункт 1</option>
                    <option>Пункт 2</option>
                </select>
                <select>
                    <option>Пункт 1</option>
                    <option>Пункт 2</option>
                </select>


                <ul className="btnlist">
                    <li><button className="popup__btn">Добавить</button></li>
                    <li><button className="popup__btn">Удалить</button></li>
                </ul>
            </div>
        </div>
    );
};

export default EditScene;