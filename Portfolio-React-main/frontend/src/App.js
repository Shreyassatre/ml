// App.js
import React from 'react';
import './App.css';
import Router from './Router'
import axios from 'axios'
import { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
