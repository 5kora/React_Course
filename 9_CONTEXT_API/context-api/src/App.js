//CSS
import './App.css';

//Config
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/About" element = {<About/>}/>
          <Route path = "/Products" element = {<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
