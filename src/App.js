import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './pages/Menu';
import ThreeCardSpread from './pages/ThreeCardSpread';
import CardOfTheDay from './pages/CardOfTheDay';
import AdviceAndCaution from './pages/AdviceAndCaution';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/ThreeCardSpread' element={<ThreeCardSpread />} />
        <Route path='/CardOfTheDay' element={<CardOfTheDay />} />
        <Route path='/AdviceAndCaution' element={<AdviceAndCaution />} />
      </Routes>
    </>
  );
}

export default App;
