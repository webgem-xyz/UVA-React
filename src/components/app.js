import { Component } from 'preact';
import { Router } from 'preact-router';
import firebase from 'firebase/app';

// Import Routes
import Login from '../routes/login';
import Account from '../routes/account/index';
import Home from '../components/home';

// Import Firebase Login
import fireApp from '../base2';

require('firebase/auth');

export default class App extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);

    this.state = {
      uid: 'hl8tgg53mkQIUmIh6D8SUsReTGD2',
      // uid: null,
    };
  }

  logout() {
    firebase.auth(fireApp).signOut();
    this.setState({ uid: null });
  }

  authenticate(e, email, password) {
    e.preventDefault();
    fireApp
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({
          uid: user.user.uid,
        });
      });
  }

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    if (this.state.uid === null) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" uid={this.state.uid} />
          <Home path="/mes/:measurementId" uid={this.state.uid} />
          <Home path="/add" uid={this.state.uid} />
          <Home path="/addMedia" uid={this.state.uid} />
          <Home path="/media/:mediaId" uid={this.state.uid} />
          <Account path="/account" />
        </Router>
      </div>
    );
  }
}
