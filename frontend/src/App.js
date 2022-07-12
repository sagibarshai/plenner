import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { NAVBAR_ITEMS } from './components/Navbar/Navbar';
import Invitation from './components/Invitation/Invitation';
import { shouldRenderNavbarHandler } from './utils/shouldRenderNavbarHandler';
import Tables from './components/Tables/Tables';
function App() {
  console.log('app');
  const renderNavbar = shouldRenderNavbarHandler();
  return (
    <div>
      <Router>
        {renderNavbar && <Navbar />}
        <Routes>
          {NAVBAR_ITEMS.map(({ route, Component }) => (
            <Route path={route} element={<Component />} key={route} />
          ))}
        </Routes>
        <Routes>
          <Route path='/invitation/:invitationId' element={<Invitation />} key='Invitation' />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
