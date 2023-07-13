import './App.css';

//1 - Config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import About from './pages/About'

//components
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
