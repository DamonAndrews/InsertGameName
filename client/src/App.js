import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Scores from './pages/Scores';

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
          {/* <Route
            path = "/Login"
            element ={<Login />}/>
            <Route
            path="/Scores"
            element={<Scores />}/> */}
        </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  );
}

export default App;
