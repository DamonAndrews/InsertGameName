import React, { useState } from 'react';
// import {useMutation} from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';

function Login(props) {

    return (
    <div id="flexBox">
    <main>
      <div className="container my-1">
      <h2 id="headerTitle">Login</h2>
      <form>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Username:</label>
          <br></br>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <br></br>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd" 
          />
          </div>
          <br></br>
          <div id ="flexBox">
          <button>LOGIN</button>
          </div>
          </form>
          </div>
        <br></br>
        <br></br>
     <div className="container my-1">
      <h2 id="headerTitle">Create Player</h2>
      <form>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Username:</label>
          <br></br>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
          </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <br></br>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd" 
          />
          </div>
          <br></br>
          <div id="flexBox">
          <button>CREATE PLAYER</button>
          </div>
          </form>
          </div>          
          </main>  
          </div>
    );
  }
  export default Login;