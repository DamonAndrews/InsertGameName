import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
<<<<<<< HEAD
import Login from './pages/Login';
import Game from './pages/Game';
=======
// import Login from './pages/Login';
import Maze from './pages/Game';
>>>>>>> 54840933b58640bcaf8d3e906aa50fb5a6c83987
import Scores from './pages/Scores';
import GameOver from './pages/GameOver';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>    
          <Route
            path = '/'
            exact
            element ={<Login />}/>
            <Route
            path = "/game"
            element ={<Maze />}/>
            <Route
            path="/scores"
            element={<Scores />}/>
            <Route
            path="/gameover"
            element={<GameOver />}/> 
            {/* <Route
            path="/login"
            element={<Login />}/>  */}
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
