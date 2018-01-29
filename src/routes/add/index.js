import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import moment from 'moment';

import style from './style';

import Header from '../../components/header/index';
// import InputGroup from '../../components/inputGroup/index';
import LocationPopup from '../../components/locationPopup/';
import RemoveButton from '../../components/removeButton/index';
import LinkRequestButton from '../../components/linkRequestButton/index';
import DateSelect from '../../components/datePicker/index';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoError = this.geoError.bind(this);
    this.removeField = this.removeField.bind(this);

    this.createMeasurement = this.createMeasurement.bind(this);
    this.handleResetLoc = this.handleResetLoc.bind(this);
    this.handleSave = this.handleSave.bind(this);

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
      show: 'Current location',
      open: false,
      geoOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 15000,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, this.state.geoOptions);
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

  handleResetLoc() {
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, this.state.geoOptions);
    this.setState({
      open: false,
      show: 'Current location',
    });
  }

  handleSave() {
    this.setState({
      show: `${this.state.longitude}, ${this.state.latitude}`,
      open: false,
    });
  }

  showPopup(e) {
    e.preventDefault();
    this.setState({
      open: true,
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
      date: moment(this.state.date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      type: 'mes',
      count: this.state.count,
      show: this.state.show,
    };
    for (let i = 0; i < this.state.count; i += 1) {
      measurement[this.state.inputType[i]] = this.state.value[i];
    }
    this.props.addMeasurement(measurement);
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
          <label>Measurement type</label>
          <select required onChange={e => this.handleSelectChange(e, i)} class={style.select}>
            <option label=" " disabled selected />
            <option value="acidity">Acidity (Ph)</option>
            <option value="salinity">Salinity (PSU)</option>
            <option value="tempature">Tempature</option>
          </select>
          <label>Value</label>
          <input
            type="number"
            step="0.0000001"
            value={this.state.value[i] || ''}
            onChange={e => this.handleChange(e, i)}
            class={style.addedInputField}
          />
          <RemoveButton value="remove item" removeField={this.removeField} i={i} />
        </div>
      );
    }
    return uiItems || null;
  }

  render() {
    return (
      <div class={style.add}>
        <Header to="/" backCol="#E7E7E7" title="add measurement" />
        <form onSubmit={e => this.createMeasurement(e)}>
          <div class={style.mainInputs}>
            <DateSelect handleState={this.handleState} label="Date" />
            <section class={style.locationEdit}>
              <label>Location</label>
              <button onClick={e => this.showPopup(e)}>
                {this.state.show} <i class="material-icons">edit</i>
              </button>
            </section>
            <LocationPopup
              longitude={this.state.longitude}
              latitude={this.state.latitude}
              handleState={this.handleState}
              handleReset={this.handleResetLoc}
              open={this.state.open}
              handleSave={this.handleSave}
            />
            <LinkRequestButton />
          </div>
          {this.createUI()}
          <button class={style.addButton} onClick={e => this.addField(e)}>
            <i className="material-icons">add</i>
          </button>
          <p class={style.addButtonLabel}>add item</p>
          {this.state.count > 0 && (
            <button class={style.submit} type="submit">
              save measurement
            </button>
          )}
        </form>
      </div>
    );
  }
}

Add.propTypes = {
  addMeasurement: PropTypes.func.isRequired,
};
