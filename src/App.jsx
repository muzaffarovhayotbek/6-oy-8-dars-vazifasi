import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import First from './pages/First';
import Second from './pages/Second';
import Five from './pages/Five';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/first" element={<First></First>}></Route>
        <Route path="/second" element={<Second></Second>}></Route>
        <Route path="/five" element={<Five></Five>}></Route>
      </Routes>
    </div>
  );
}

export default App;
