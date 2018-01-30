import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { route } from 'preact-router';
// import moment from 'moment';
// import DatePicker from 'react-datepicker';

import base from '../../base';

import LocationPopup from '../../components/locationPopup/';
import Header from '../../components/header';
import InputGroup from '../../components/inputGroup/index';
import FormItem from '../../components/formItem/';
import LinkRequestButton from '../../components/linkRequestButton/index';

import style from './style';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleResetLoc = this.handleResetLoc.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditSave = this.handleEditSave.bind(this);

    this.state = {
      measurement: {},
      open: false,
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.fetch(`/${this.props.uid}/mes/${this.props.measurementId}`, {
      context: this,
      then(data) {
        this.setState({
          measurement: data,
        });
      },
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  showPopup(e) {
    e.preventDefault();
    this.setState({
      open: true,
    });
  }

  handleResetLoc() {
    this.setState({
      open: false,
    });
  }

  handleState(kind, value) {
    const measurement = { ...this.state.measurement };
    measurement[kind] = value;
    this.setState({
      measurement,
    });
  }

  handleChange(e, kind) {
    this.handleState(kind, e.target.value);
  }

  handleSave() {
    this.setState({
      open: false,
    });
  }

  handleEditSave() {
    const measurementId = this.props.measurementId;
    base.update(`/${this.props.uid}/mes/${this.props.measurementId}`, {
      data: this.state.measurement,
      then() {
        route(`/mes/${measurementId}`);
      },
    });
  }

  render() {
    const measurement = this.state.measurement;
    return (
      <div class={style.edit}>
        <Header title="Edit measurement" to={`/mes/${this.props.measurementId}`} />
        <section class={style.editMain}>
          <div class={style.inputWrap}>
            <InputGroup
              value={measurement.date}
              kind="date"
              label="Date"
              handleState={this.handleState}
              fullWidth
              type="date"
              placeholder=""
            />
          </div>
          <section class={style.locationEdit}>
            <label>Location</label>
            <button onClick={e => this.showPopup(e)}>
              {measurement.show || (
                <p>
                  {measurement.longitude}, {measurement.latitude}
                </p>
              )}{' '}
              <i class="material-icons">edit</i>
            </button>
          </section>
          <LocationPopup
            longitude={measurement.longitude}
            latitude={measurement.latitude}
            handleState={this.handleState}
            handleReset={this.handleResetLoc}
            open={this.state.open}
            handleSave={this.handleSave}
          />
          <LinkRequestButton />
        </section>
        <section class={style.data}>
          {measurement.acidity && (
            <FormItem item="acidity" handleState={this.handleState} value={measurement.acidity} />
          )}
          {measurement.salinity && (
            <FormItem item="salinity" handleState={this.handleState} value={measurement.salinity} />
          )}
          {measurement.Temperature && (
            <FormItem
              item="Temperature"
              handleState={this.handleState}
              value={measurement.Temperature}
            />
          )}
          <input
            type="button"
            onClick={this.handleEditSave}
            value="Save changes"
            class={style.submit}
          />
        </section>
      </div>
    );
  }
}

Edit.propTypes = {
  uid: PropTypes.string.isRequired,
  measurementId: PropTypes.string.isRequired,
};
