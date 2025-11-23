import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
from 'react-router-dom';

function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null);

let showAlert=(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
let changeMode=()=>{
  if (mode==="light") {
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode has been enabled", "success");
  }else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled", "success");
  }
}
  return (
    <>
    <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} changeMode={changeMode} showAlert={showAlert}/>
        <Alert alert={alert} showAlert={showAlert}/>
        <Routes>
          <Route exact path='/'
                   element={<TextForm heading="Enter text here to analyse" mode={mode} showAlert={showAlert} />}>
          </Route>
          <Route exact path='/About'
                   element={<About/>}>
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
