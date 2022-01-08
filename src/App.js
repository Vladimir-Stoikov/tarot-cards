import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './pages/Menu';
import ThreeCardSpread from './pages/ThreeCardSpread';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/ThreeCardSpread' element={<ThreeCardSpread />} />
      </Routes>
    </>
  );
}

export default App;
