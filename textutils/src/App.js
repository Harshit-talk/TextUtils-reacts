// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); // Weather Dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })   
    setTimeout(() =>{
      setAlert(null);
    },3000); 
  } 
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success")
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing ";
      // },2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now!!!";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success")
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextHarshit"/> */}
    {/* <Navbar/> */}
    
    <Router>
              <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
              <Alert alert={alert}/>
            <div className="container my-3">
              <Switch>
                    <Route exact path="/about">
                      <About mode = {mode} />
                    </Route>
                    <Route exact path="/">
                      <TextForm showAlert = {showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces " mode = {mode}/>
                    </Route>
              </Switch>      
            </div>         
    </Router>       
    </>
  );
}

export default App;
