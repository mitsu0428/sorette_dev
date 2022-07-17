import React from 'react';
import './App.css';
import Header from './components/Header';
import TopPageThumb from './components/TopPageThumb';
import HomePage  from './components/HomePage';
import Pages from './components/Pages';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <TopPageThumb />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  ); 
}  

export default App;
