import React from 'react';

const Table = () => {
    return (
        <div>
            <table className="table1" cellSpacing="0" cellPadding="0" id="maket">
                <tr>
                    <td className="leftcol">
                        <table className="tab">
                            <caption className="tabTitle">Сценарии</caption>
                            <tr className="str">
                                <td className="tdd">
                                    <ul>
                                        <li>Название:</li>
                                        <li>Описание:</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <ul>
                                        <li>Название:</li>
                                        <li>Описание:</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <ul>
                                        <li>Название:</li>
                                        <li>Описание:</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <ul>
                                        <li>Название:</li>
                                        <li>Описание:</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <ul>
                                        <li>Название:</li>
                                        <li>Описание:</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>

                    </td>
                    <td className="rightcol">
                        <table className="tab1">
                            <caption className="tabTitle">Сцены</caption>
                            <tr className="str">
                                <td className="tdd">
                                    <div className="contentscene">Название</div>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <div className="contentscene">Название</div>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <div className="contentscene">Название</div>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <div className="contentscene">Название</div>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <div className="contentscene">Название</div>
                                </td>
                            </tr>
                            <tr className="str">
                                <td className="tdd">
                                    <div className="contentscene">Название</div>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
                <tr>
                    <td><button className="editor__btn" >Добавить</button>
                        <button className="editor__btn" >Удалить</button></td>
                    <td><button className="editor__btn1" >Добавить</button>
                        <button className="editor__btn1" >Редактировать</button>
                        <button className="editor__btn1" >Удалить</button></td>
                </tr>
            </table>
        </div>
    );
};

export default Table;