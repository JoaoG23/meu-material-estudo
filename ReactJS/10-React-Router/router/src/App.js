// import logo from './logo.svg';
import './App.css';

import Nav from './Componentes/Nav';
import Home from './Componentes/Home';
import Aulas from './Componentes/Aulas';
import Sobre from './Componentes/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className='App'>
          <Nav />
          <Routes>
            
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/aulas/a' element={<div> <h3>Um Novo conteudo </h3></div>}></Route>
            <Route path='/aulas' element={<Aulas />}></Route>
            <Route path='/sobre' element={<Sobre />}></Route>
            <Route path='*' element={<h2>Essa Rota não Existe</h2>}></Route>

          </Routes>
        </div>
    </Router>
  );
}

export default App;
