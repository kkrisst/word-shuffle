import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import LessonsPage from './pages/lessons/lessons.component';
import ContactPage from './pages/contact/contact.component';
import UserAuthPage from './pages/user-auth-page/user-auth-page.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.css';

// TODO get currentUser from store
function App() {
  const currentUser = false;

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/lessons' component={LessonsPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/signin' render={
          () => currentUser
          ? (<Redirect to='/' />)
          : (<UserAuthPage />)
        }
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
