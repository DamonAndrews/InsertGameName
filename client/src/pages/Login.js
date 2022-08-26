import React, { useState } from 'react';
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
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            
          />
          </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
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


