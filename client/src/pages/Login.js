import React, { useState } from 'react';
<<<<<<< HEAD
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';

function Login(props)  {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error }] = useMutation(LOGIN);
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const mutationResponse = await login({
  //       variables: { email: formState.email, password: formState.password },
  //     });
  //     const token = mutationResponse.data.login.token;
  //     Auth.login(token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  //};
  return (
    <main>
    <div>Login page </div>
     <div className="container my-1">
      <h2>Login</h2>
      <form>
        
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Username:</label>
=======
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
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
<<<<<<< HEAD
            
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
=======
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
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
<<<<<<< HEAD
            
=======
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
          />
          </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
<<<<<<< HEAD
=======
          <br></br>
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
          <input
            placeholder="******"
            name="password"
            type="password"
<<<<<<< HEAD
            id="pwd"
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div> 
    </main>
  );
}
export default Login;


=======
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
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
