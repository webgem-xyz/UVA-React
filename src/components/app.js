import { Component } from 'preact';
import { Router, route } from 'preact-router';
import firebase from 'firebase/app';

// Import Routes
import Login from '../routes/login';
import Home from '../components/home';
import Footer from '../components/footer/';
import Notifications from '../routes/notifications';
import CreateAccount from '../routes/createAccount';
import Redirect from './redirect/index';
import Requests from '../routes/requests';

// Import Firebase Login
import fireApp from '../base2';

require('firebase/auth');

function createAccount(e, email, password) {
  e.preventDefault();
  fireApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
    })
    .then(() => {
      route('/');
    });
}

export default class App extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);

    this.state = {
      // uid: 'hl8tgg53mkQIUmIh6D8SUsReTGD2',
      // email: 'user@uva.nl',
      email: null,
      uid: null,
      login: null,
    };
  }

  componentDidMount() {
    firebase.auth(fireApp).onAuthStateChanged(user => {
      if (user) {
        this.authHandler(null, { user });
      }
    });
  }

  logout(e) {
    e.preventDefault();
    firebase.auth(fireApp).signOut();
    this.setState({ uid: null, email: null });
  }

  authenticate(e, email, password) {
    e.preventDefault();
    fireApp
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({
          uid: user.user.uid,
          email: user.user.email,
          login: user.user.metadata.lastSignInTime,
        });
      });
  }

  authHandler(err, authData) {
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

    this.setState({
      uid: authData.user.uid,
      email: authData.user.email,
      login: authData.user.metadata.lastSignInTime,
    });
  }

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    if (this.state.uid === null) {
      return (
        <Router>
          <Login authenticate={this.authenticate} default />
          <CreateAccount path="/createAccount" createAccount={createAccount} />
        </Router>
      );
    }
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" uid={this.state.uid} />
          <Home path="/mes/:measurementId" uid={this.state.uid} />
          <Home path="/add" uid={this.state.uid} />
          <Home path="/addMedia" uid={this.state.uid} />
          <Home path="/edit/:measurementId" uid={this.state.uid} />
          <Home path="/editMedia/:mediaId" uid={this.state.uid} />
          <Home path="/med/:mediaId" uid={this.state.uid} />
          <Home
            path="/account"
            uid={this.state.uid}
            email={this.state.email}
            logout={this.logout}
            login={this.state.login}
          />
          <Requests path="/requests" />
          <Notifications path="/notifications" />
          <Redirect path="/createAccount" to="/" />
        </Router>
        <Footer />
      </div>
    );
  }
}
