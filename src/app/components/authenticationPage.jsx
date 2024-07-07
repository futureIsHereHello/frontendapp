import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

const styles = {
  input: {
    color: 'black',
    margin: '8px 0',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    margin: '8px 0',
    padding: '8px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#141413',
    color: '#ffffff',
    cursor: 'pointer',
    width: '100%',
  },
};

const Login = ({ setToken, closeModal, setWelcomeMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/login', { email, password });
      // If you want to use local storage instead of cookies
      // setToken(response.data.token);
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('userId', response.data.userId);
      // localStorage.setItem('username', response.data.username);
      const { token, userId, username } = response.data;
      setToken(token);
      Cookies.set('token', token);
      Cookies.set('userId', userId);
      Cookies.set('username', username);
      setWelcomeMessage(`Welcome, ${username}`); // Set welcome message
      closeModal();
    } catch (err) {
      console.error('Login Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
};

const Signup = ({ setToken, closeModal, setWelcomeMessage, toggleToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/signup', { username, email, password });
      //If you want to use local storage instead of Cookies
      // setToken(response.data.token);
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('userId', response.data.userId);
      // localStorage.setItem('username', response.data.username); // Store username
      const { token, userId } = response.data;
      setToken(token);
      Cookies.set('token', token);
      Cookies.set('userId', userId);
      Cookies.set('username', username);
      setWelcomeMessage(`Welcome, ${username}`);  // Set welcome message
      closeModal();
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toggleToLogin();
        alert('User already exists, please login.');
      } else {
        console.error('Signup Error:', err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={styles.input}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Signup</button>
    </form>
  );
};

export { Login, Signup };
