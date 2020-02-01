import React from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Header/index'
import Contato from './components/About/index'
import Projects from './components/Projects/index'

export default function Routes (){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
           <Route path="/Contato" component = {Contato}/>
           <Route path="Projects" component = {Projects}/>
        </Switch>
        </BrowserRouter>
    )
}