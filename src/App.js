import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/:type" >
          <HomePage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
