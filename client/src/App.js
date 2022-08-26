import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Scores from './pages/Scores';
import GameOver from './pages/GameOver';
import Game from './pages/Game'
import Login from './pages/Login'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// import Login from './pages/Login';
import Maze from './pages/Game';
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
            path = '/home'
            exact
            element ={<Login />}/>
            <Route
            path = "/game"
            element ={<Game />}/>
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
