import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideDrawerNavigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shipments from './pages/Shipments';
import Projects from './pages/Projects';
import Businesses from './pages/Businesses';
import News from './pages/News';
import shipmentsData from './data/table-data.json';

function App() {
  return (
    <div className="App">
<SideDrawerNavigation />
<Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shipments" element={<Shipments shipments={shipmentsData}/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/businesses" element={<Businesses/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
