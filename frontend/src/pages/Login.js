import React from 'react';

const Login = () => {
  return (
    <main>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />

        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
