import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { route } from 'preact-router';
import moment from 'moment';

import style from './style';

import base from '../../base';
import Header from '../../components/header/index';
import InputGroup from '../../components/inputGroup/index';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoError = this.geoError.bind(this);

    this.createMeasurement = this.createMeasurement.bind(this);
    this.addMeasurement = this.addMeasurement.bind(this);

    this.handleState = this.handleState.bind(this);

    const date = new Date();
    const month = date.getMonth() + 1;

    this.state = {
      longitude: '',
      latitude: '',
      date: `${date.getFullYear()}-${month}-${date.getDate()}`,
      value: [],
      inputType: [],
      count: 0,
      geoOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 15000,
      },
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`/${this.props.uid}/mes/`, {
      context: this,
      state: 'measurements',
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, this.state.geoOptions);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // Getting Users GEO location
  geoSuccess(position) {
    this.setState({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  }

  geoError() {
    this.setState({
      longitude: '0',
      latitude: '0',
    });
  }

  // Form Handlers
  handleChange(e, i) {
    const value = this.state.value.slice();
    value[i] = e.target.value;
    this.setState({ value });
  }

  handleSelectChange(e, i) {
    const inputType = this.state.inputType.slice();
    inputType[i] = e.target.value;
    this.setState({ inputType });
  }

  handleState(kind, value) {
    this.setState({
      [kind]: value,
    });
  }

  removeField(i) {
    const value = this.state.value.slice();
    const inputType = this.state.inputType.slice();
    value.splice(i, 1);
    inputType.splice(i, 1);
    this.setState({
      count: this.state.count - 1,
      value,
      inputType,
    });
  }

  createMeasurement(event) {
    event.preventDefault();
    const measurement = {
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      date: moment(this.date.value, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      type: 'mes',
    };
    for (let i = 0; i < this.state.count; i += 1) {
      measurement[this.state.inputType[i]] = this.state.value[i];
    }
    this.addMeasurement(measurement);
  }

  addMeasurement(measurement) {
    // Update our measurements state
    const measurements = { ...this.state.measurements };
    // add in our new measurement
    const timestamp = Date.now();
    const dateFormatted = moment(this.state.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    measurements[`measurement_${dateFormatted}_${timestamp}`] = measurement;
    // set state
    this.setState({
      measurements,
    });
    route('/');
  }

  addField(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  // Populate form
  createUI() {
    const uiItems = [];
    for (let i = 0; i < this.state.count; i += 1) {
      uiItems.push(
        <div key={i} class={style.customFormfieldWrap}>
          <select required onChange={e => this.handleSelectChange(e, i)} class={style.select}>
            <option disabled selected>
              Select measurement type
            </option>
            <option value="acidity">Acidity (Ph)</option>
            <option value="salinity">Salinity (PSU)</option>
            <option value="tempature">Tempature</option>
          </select>
          <input
            type="number"
            value={this.state.value[i] || ''}
            onChange={e => this.handleChange(e, i)}
            class={style.addedInputField}
          />
          <input
            type="button"
            value="remove item"
            class={style.remove}
            onClick={e => this.removeField(e, i)}
          />
        </div>
      );
    }
    return uiItems || null;
  }

  render() {
    return (
      <div class={style.add}>
        <Header to="/" backCol="#E7E7E7" title="add measurement" />
        <form onSubmit={(e) => this.createMeasurement(e)}>
          <div class={style.mainInputs}>
            <div class={style.inputRow}>
              <InputGroup
                value={this.state.longitude}
                kind="longitude"
                label="Longitude"
                handleState={this.handleState}
              />
              <InputGroup
                value={this.state.latitude}
                kind="latitude"
                label="Latitude"
                handleState={this.handleState}
              />
            </div>
            <div class={style.inputGroupDate}>
              <label for="date">Date of measurement</label>
              <input
                ref={input => (this.date = input)}
                type="text"
                placeholder="getting location.."
                value={this.state.date}
                id="date"
                class={style.inputField}
              />
            </div>
          </div>
          {this.createUI()}
          <button class={style.addButton} onClick={e => this.addField(e)}>
            <i className="material-icons">add</i>
          </button>
          {this.state.count > 0 && (
            <button class={style.submit} type="submit">
              submit measurement
            </button>
          )}
        </form>
      </div>
    );
  }
}

Add.propTypes = {
  uid: PropTypes.string.isRequired,
};
