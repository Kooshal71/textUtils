import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert]  = useState(null)

  let toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "rgb(45, 45, 60)"
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <>
  <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
  <Alert message = {alert}/>
  <div className="container my-5">
  <TextForm heading = "Enter the text to be analyzed" mode = {mode} showAlert = {showAlert}/>
  </div>
    </>
  );
}

export default App;
