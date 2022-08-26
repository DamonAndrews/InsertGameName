import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Login from './pages/Login';
import Maze from './pages/Game';
import Scores from './pages/Scores';
import GameOver from './pages/GameOver';
import Game from './pages/Game'

function App() {
  return (
    <>
    <Router>
      {/* <Header /> */}
        <Routes>    
          <Route
            path = '/'
            exact
            element ={<Home />}/>
            <Route
            path = "/game"
            element ={<Game />}/>
            <Route
            path="/scores"
            element={<Scores />}/>
            <Route
            path="/gameover"
            element={<GameOver />}/> 
        </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  );
}

export default App;
