import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Import Routes
import Overview from '../routes/overview';
import Login from '../routes/login';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      uid: 'abab'
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
          <Overview path="/" />
        </Router>
      </div>
    );
  }
}
