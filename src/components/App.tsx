import React, { useState, lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import './App.css';
// import { SearchParams } from './SearchParams';
// import { Details } from './Details';
import { ThemeContext } from './ThemeContext';
import { NavBar } from './NavBar';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

export const App: React.FC = () => {
  const [color, setColor] = useState<string>('darkblue');

  return (
    <ThemeContext.Provider value={[color, setColor]}>
      <div>
        <NavBar />
        <React.StrictMode>
          <Suspense fallback={<span>Loading...</span>}>
            <Router>
              <SearchParams path='/' />
              <Details path='/details/:id' id='' />
            </Router>
          </Suspense>
        </React.StrictMode>
      </div>
    </ThemeContext.Provider>
  );
};
