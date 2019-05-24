import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import { SearchParams } from './SearchParams';
import { Details } from './Details';
import { ThemeContext } from './ThemeContext';
import { NavBar } from './NavBar';

export const App: React.FC = () => {
  const [color, setColor] = useState<string>('darkblue');

  return (
    <ThemeContext.Provider value={[color, setColor]}>
      <div>
        <NavBar />
        <React.StrictMode>
          <Router>
            <SearchParams path='/' />
            <Details path='/details/:id' id='' />
          </Router>
        </React.StrictMode>
      </div>
    </ThemeContext.Provider>
  );
};
