import React from 'react';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/home'
import Atualizar from './components/pages/atualizar'
import Cadastrar from './components/pages/cadastrar'
import Deletar from './components/pages/deletar'
import Buscar from './components/pages/buscar'
import Login from './components/pages/login'

function App() {
  return (
    <>
     <Router>
       <NavBar />
       <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/cadastrar' component = {Cadastrar}/>
          <Route path = '/buscar' component = {Buscar}/>
          <Route path = '/atualizar' component = {Atualizar}/>
          <Route path = '/deletar' component = {Deletar}/>
          <Route path = '/login' component = {Login}/>
       </Switch>
     </Router>
    </>
  );
}

export default App;
