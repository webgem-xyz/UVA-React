import { Component } from 'preact';
import { Router } from 'preact-router';

// Import Routes
import Overview from '../routes/overview';
import Login from '../routes/login';
import Measurement from '../routes/measurement';
import Account from '../routes/account/index';
import Add from '../routes/add/index';
import AddMedia from '../routes/addMedia/index';
import Media from '../routes/Media/index';

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
          <Overview path="/" uid={this.state.uid} />
          <Measurement path="/mes/:measurementId" uid={this.state.uid} />
          <Account path="/account" />
          <Add path="/add" />
          <AddMedia path="/addMedia" />
          <Media path="/media/:mediaId" />
        </Router>
      </div>
    );
  }
}
