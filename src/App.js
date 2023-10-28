import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Mail from './components/Mail/Mail';
import Footer from './components/Footer/Footer';




function App() {
  const [mode,setmode] = useState('');
  const [name,setname] = useState('enable DarkMode');
  const [color,setcolor] = useState('dark')
  const toggle =() => {
   if(mode==='dark'){
    setmode('')
    setname('Enable Darkmode')
    setcolor('dark')
    document.body.style.background = 'white'
    showalert('dark mode has been disabled','success')
    document.title='TextAnalyzer-light'
    // setInterval(() => {
    //   document.title='textanalyzer is anmazing'
    // },2000 );
    // setInterval(() => {
    //   document.title='install now'
    // }, 2500);
   }
   else{
    setmode('dark')
    setname('Disable DarkMode')
    setcolor('')
    document.body.style.background = 'rgb(19 67 99)'
    showalert('dark mode has been enabled','success')
    document.title='TextAnalyzer-dark'
    // setInterval(() => {
    //   document.title='textanalyzer is anmazing'
    // },2000 );
    // setInterval(() => {
    //   document.title='install now'
    // }, 2500);
   }
  }
  const[alert,setalert] = useState(null)
  const showalert = (message,type) => {
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} togglemode={toggle} modename={name} namecolor={color}/>
    <Alert alert={alert} />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Textform heading="Enter your text in the box" mode={mode} showalt={showalert}/>}/>

        <Route path='/about' element={<About mode={mode}/>}/>
      </Routes>
    </div>
    <Mail mode={mode}/>
    <div className='container' id='foot'>
    <Footer  mode={mode}/>
    </div>
    </BrowserRouter>

    {/* <Navbar mode={mode} togglemode={toggle} modename={name} namecolor={color}/>
    <Alert alert={alert} />
    <div className='container'>
    <Textform heading="Enter your text in the box" mode={mode} showalt={showalert}/>
    <About/>
    </div> */}
  </>
  );
}

export default App;
