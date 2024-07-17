import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './containers/About';

function App() {
  return (
    <div>
     
     <Router>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     <Footer/>
     </Router>
     
    </div>
  );
}

export default App;

