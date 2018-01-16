import { Component } from 'preact';
import style from './style';

import base from '../../base';
import Header from '../../components/header/index';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoError = this.geoError.bind(this);

    const date = new Date();
    const month = date.getMonth() + 1;

    this.state = {
      longitude: '',
      latitude: '',
      date: `${date.getFullYear()}-${month}-${date.getDate()}`,
      value: [],
      inputType: [],
      count: 3,
      geoOptions: {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
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
    navigator.geolocation.watchPosition(this.geoSuccess, this.geoError, this.state.geoOptions);
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
      longitude: 0,
      latitude: 0,
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

  addField(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  // Populate form
  createUI() {
    const uiItems = [];
    for (let i = 0; i < this.state.count; i += 1) {
      uiItems.push(
        <div key={i}>
          <select onChange={e => this.handleSelectChange(e, i)}>
            <option disabled selected>
              Select measurement type
            </option>
            <option value="acidity">Acidity (Ph)</option>
            <option value="salinity">Salinity (PSU)</option>
            <option value="tempature">Tempature</option>
          </select>
          <input type="number" value={this.state.value[i] || ''} onChange={e => this.handleChange(e, i)} />
          <input type="button" value="remove item" class={style.remove} onClick={e => this.removeField(e, i)} />
        </div>
      );
    }
    return uiItems || null;
  }

  render() {
    return (
      <div class={style.add}>
        <Header to="/" backCol="#E7E7E7" title="add measurement" />
        <form ref={(input) => this.addForm = input} onSubmit={this.addMeasurement}>
          <div class={style.mainInputs}>
            <input
              ref={(input) => this.longitude = input}
              type="text"
              placeholder="getting location.."
              value={this.state.longitude}
            />
            <input
              ref={(input) => this.latitude = input}
              type="text"
              placeholder="getting location.."
              value={this.state.latitude}
            />
            <input
              ref={(input) => this.date = input}
              type="text"
              placeholder="getting location.."
              value={this.state.date}
            />
          </div>
          {this.createUI()}
          <button class={style.addButton} onClick={e => this.addField(e)}>
            <i className="material-icons">add</i>
          </button>
        </form>
      </div>
    );
  }
}
