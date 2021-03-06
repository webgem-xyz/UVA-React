import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Router, route } from 'preact-router';
import moment from 'moment';

// Import firebase
import base from '../../base';

// Import Routes
import Overview from '../../routes/overview';
import Measurement from '../../routes/measurement';
import Add from '../../routes/add/index';
import AddMedia from '../../routes/addMedia/index';
import Edit from '../../routes/edit/';
import EditMedia from '../../routes/editMedia/';
import Media from '../../routes/Media/index';
import Account from '../../routes/account';
import Progress from '../../routes/progress';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.addMeasurement = this.addMeasurement.bind(this);
    this.removeMeasurement = this.removeMeasurement.bind(this);

    this.state = {
      measurements: {},
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`/${this.props.uid}/mes/`, {
      context: this,
      state: 'measurements',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addMeasurement(measurement) {
    // Update our measurements state
    const measurements = { ...this.state.measurements };
    // add in our new measurement
    const timestamp = Date.now();
    const dateFormatted = moment(measurement.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    measurements[`measurement_${dateFormatted}_${timestamp}`] = measurement;
    // set state
    this.setState({
      measurements,
    });
    route('/');
  }

  removeMeasurement = (e, key) => {
    e.preventDefault();
    const measurements = { ...this.state.measurements };
    measurements[key] = null;
    this.setState({ measurements });
    route('/');
  };

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <Router onChange={this.handleRoute}>
        <Overview path="/" uid={this.props.uid} measurements={this.state.measurements} />
        <Measurement
          path="/mes/:measurementId"
          uid={this.props.uid}
          measurements={this.state.measurements}
          removeMeasurement={this.removeMeasurement}
        />
        <Add
          path="/add"
          addMeasurement={this.addMeasurement}
          measurements={this.state.measurements}
        />
        <AddMedia
          path="/addMedia"
          uid={this.props.uid}
          measurements={this.state.measurements}
          addMeasurement={this.addMeasurement}
        />
        <Edit
          path="/edit/:measurementId"
          addMeasurement={this.addMeasurement}
          uid={this.props.uid}
          measurements={this.state.measurements}
        />
        <EditMedia
          path="/editMedia/:mediaId"
          uid={this.props.uid}
          measurements={this.state.measurements}
          addMeasurement={this.addMeasurement}
        />
        <Media
          path="/med/:mediaId"
          uid={this.props.uid}
          measurements={this.state.measurements}
          removeMeasurement={this.removeMeasurement}
        />
        <Account
          path="/account"
          uid={this.props.uid}
          measurements={this.state.measurements}
          email={this.props.email}
          logout={this.props.logout}
          login={this.props.login}
        />
        <Progress path="/progress" uid={this.props.uid} measurements={this.state.measurements} />
      </Router>
    );
  }
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.string.isRequired,
};
