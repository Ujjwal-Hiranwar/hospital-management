import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Navigation from './components/landing page/Navigation';
import Login from './components/landing page/Login';
import Register from './components/landing page/Register';

function Home(){
  return(
    <div>
    <h2 className='text-center'>This is home page</h2>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route path="home" element={<Home />} />
        <Route path="services" element={<h1>This is services page</h1>} />
        <Route path="contact" element={<h1>This is contact us page</h1>} />
        <Route path='loginform' element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
