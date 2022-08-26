import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
<<<<<<< HEAD
import Scores from './pages/Scores';
import GameOver from './pages/GameOver';
import Game from './pages/Game'
import Login from './pages/Login'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
=======
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
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e


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
<<<<<<< HEAD
            <Route
            path="/"
            element={<Login />}/>
=======
            {/* <Route
            path="/login"
            element={<Login />}/>  */}
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
