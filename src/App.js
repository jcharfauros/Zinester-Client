// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Auth } from './auth/Auth';
import { Sitebar } from './components/Navbar';
import { Switch2 } from './components/Switch';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [ sessionToken, setSessionToken ] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ?  
    // <Index token={sessionToken} /> : <Auth updateToken={updateToken} />
    // <Home token={sessionToken} /> : <Auth updateToken={updateToken} />
    <Switch2 token={sessionToken} /> : <Auth updateToken={updateToken} />
    );
  };

  return (
   <div>
    <Router>     
      <React.Fragment>
        <Sitebar 
        clickLogout={clearToken}
        />
        {protectedViews()}
      </React.Fragment>
     </Router>
   </div>
  );
}

export default App;