import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from "./pages/Game.js"
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/footer.js';
import Menu from './components/Menu/menu.js';




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Menu>
          <Route exact path="/" component={Game} />
          <Route exact path="/Game" component={Game}></Route>
        </Menu>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
