import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import LessonsPage from './pages/lessons-page/lessons-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import UserAuthPage from './pages/user-auth-page/user-auth-page.component';
import LicencePage from './pages/licence-page/licence-page.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.css';

// TODO get currentUser from store
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/lessons' component={LessonsPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/signin' render={
            () => this.props.currentUser
            ? (<Redirect to='/lessons' />)
            : (<UserAuthPage />)
          }
          />
          <Route exact path='/licence' component={LicencePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
