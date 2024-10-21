
import {useState} from 'react';
import './App.css';
// import DarkMode from './Components/DarkMode';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const [Mode, setMode] = useState("Dark");
  const [MyStyle, setMyStyle] = useState();
  const toggleMode = () =>{
    if(Mode === "Dark"){
        document.body.style.backgroundColor = '#042743' ;
        setMode("Light");
    }
    else{
        document.body.style.backgroundColor = 'white';
        setMode("Dark");
    }
  }
  return (
    <>
    <Navbar heading="My App" togglemode={toggleMode} btntext={Mode}  />
    <Textform name="Adeshara Brijesh"/>
    {/* <DarkMode/> */}
    </>
  );
}

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } 
    else {
        nav.classList.remove('active')
    }
}

export default App;
