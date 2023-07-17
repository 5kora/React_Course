import './App.css';

//1 - Config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//components
import Navbar from './componentes/Navbar';
import SearchForm from './componentes/SearchForm';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - Links com react router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - Nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 7 - No match route */}
          <Route path='*' element={<NotFound/>}/>
          {/* 9 - Search */}
          <Route path='/search' element={<Search/>}/>
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to="/About"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
