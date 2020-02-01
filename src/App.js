import React from 'react';
import {BrowserRouter,Switch} from 'react-router-dom';
import Routes from './routes';
import './styles/global.css'
import Footer from './components/Footer/index'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Routes/>
    </Switch>
    </BrowserRouter>
    
    </>
  );
}
