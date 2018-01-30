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
    this.handleEditSave = this.handleEditSave.bind(this);

    this.state = {
      measurement: {},
      open: false,
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.bindToState(`/${this.props.uid}/mes/${this.props.measurementId}`, {
      context: this,
      state: 'measurement',
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

  handleSave() {
    this.setState({
      open: false,
    });
  }

  handleEditSave() {
    route(`/mes/${this.props.measurementId}`);
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
              placeholder=""
            />
            <i className="material-icons">date_range</i>
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
          {measurement.acidity && <FormItem item="acidity" value={measurement.acidity} />}
          {measurement.salinity && <FormItem item="acidity" value={measurement.salinity} />}
          {measurement.Temperature && <FormItem item="acidity" value={measurement.Temperature} />}
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
