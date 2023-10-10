import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Textform heading="Enter your text in the box"/>
    <About/>
    </div>
  </>
  );
}

export default App;
