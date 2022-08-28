import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
<<<<<<< HEAD
import Maze from './pages/Game';
=======
import Login from './pages/Login';
// import Game from './pages/Game';
import Maze from './pages/Game';
import Scores from './pages/Scores';
import GameOver from './pages/GameOver';
>>>>>>> ade3ff7df8159a80348e6196b12c2c081742e33d
import Header from './components/Header';
import Footer from './components/Footer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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



function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Header />
        <Routes>    
          <Route
<<<<<<< HEAD
            path = '/home'
=======
            path = "/"
>>>>>>> ade3ff7df8159a80348e6196b12c2c081742e33d
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
            <Route
            path="/home"
            element={<Home />}/> 
            <Route
            path="/login"
            element={<Login />}/> 

        </Routes>
      <Footer />
    </Router>
    </ApolloProvider>
  );
}

export default App;
