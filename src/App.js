import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div className="App">
      <Router>

        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />

        <div className="container">

          <Switch>

            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm heading="Enter Text to Analyse" mode={mode} />
            </Route>

          </Switch>

        </div>

      </Router>

    </div>
  );
}

export default App;