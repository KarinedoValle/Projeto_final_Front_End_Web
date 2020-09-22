import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/others/NavBar'
import Footer from './components/others/Footer'
import Home from './components/pages/home'
import Atualizar from './components/pages/atualizar'
import Cadastrar from './components/pages/cadastrar'
import Deletar from './components/pages/deletar'
import Buscar from './components/pages/buscar'
import Cliente from './components/others/cliente'

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
          <Route path = '/cliente/:busca' component = {Cliente}/>
       </Switch>
       <Footer />
     </Router>
    </>
  );
}

export default App;
