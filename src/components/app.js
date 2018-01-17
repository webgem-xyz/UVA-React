import { Component } from 'preact';
import { Router } from 'preact-router';

// Import Routes
import Login from '../routes/login';
import Account from '../routes/account/index';
import Home from '../components/home';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      uid: 'hl8tgg53mkQIUmIh6D8SUsReTGD2',
    };
  }

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    if (this.state.uid === null) {
      return <Login />;
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
