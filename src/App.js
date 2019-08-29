import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
