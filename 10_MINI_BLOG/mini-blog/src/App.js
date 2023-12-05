import "./App.css";
import { db } from "./firebase/config";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//Context
import { AuthProvider } from "./context/authContext";

//Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />.
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
