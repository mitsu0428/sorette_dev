import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage  from './components/HomePage';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  ); 
}  

export default App;
