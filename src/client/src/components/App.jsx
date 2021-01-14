import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Menu from "./menu/Menu"
import Editor from "./editor/Editor";
import EditScene from "./editor/EditScene";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [dispatch])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                    <Switch>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                    : <Switch>
                            {/*<Route component={Menu}/>*/}
                            <Route component={Editor}/>
                    </Switch>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
