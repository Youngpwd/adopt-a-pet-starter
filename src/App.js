import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route path="/:type/:id">
            <PetDetailsPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/:type?">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
