import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Doodles from './components/Doodles/Doodles';
import Doodle from './components/Doodle/Doodle';
import EditDoodle from './components/EditDoodle/EditDoodle';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doodles' element={<Doodles />}/>
        <Route path='/doodles/:id' element={<Doodle />}/>
        <Route path='/doodles/:id/edit' element={<EditDoodle />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
