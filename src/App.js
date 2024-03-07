// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import { useState } from 'react';
import React from 'react';
function App() {
  const[ mode, setMode]= useState('light');
  const[alert,setalert]=useState(null)
  const setalerts=(message,type)=>{
      setalert({
        mag:message,
        type:type
      })
    setTimeout(() => {
       setalert(null)
    },1600);
    }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#1F618D';
      setalerts("Dark mode has been successful enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setalerts("Light mode has been successful enable","success");
    }
  }
  return ( 
        <>
  {/* // <Router> */}
  <Navbar title='Text-app' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container py-5"> 
       <TextFrom setalerts={setalerts}handing='Enter the text here' mode={mode}/>
       
  </div>
 
</>
  )
}
export default App;
