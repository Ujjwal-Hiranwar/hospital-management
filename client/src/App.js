import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Navigation from './components/landing page/Navigation';
import Login from './components/landing page/Login';
import Register from './components/landing page/Register';
import Dashboard from './components/home/Dashboard';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route path="" element={<Navigation />} />
        <Route path="services" element={<h1>This is services page</h1>} />
        <Route path="contact" element={<h1>This is contact us page</h1>} />
        <Route path='loginform' element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
        <Route path="/home" >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
