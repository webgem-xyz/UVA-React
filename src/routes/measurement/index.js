import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import Header from '../../components/header';
import style from './style';
import base from '../../base';

export default class Measurement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurement: {},
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

  render() {
    const measurement = this.state.measurement;
    return (
      <div class={style.container}>
        <Header title="view measurement" to="/" />
        {measurement.longitude && (
          <div class={style.row}>
            <p class={style.label}>Longitude</p>
            <p class={style.value}>{measurement.longitude}</p>
          </div>
        )}
        {measurement.latitude && (
          <div class={style.row}>
            <p class={style.label}>Latitude</p>
            <p class={style.value}>{measurement.latitude}</p>
          </div>
        )}
        {measurement.date && (
          <div class={style.row}>
            <p class={style.label}>Date</p>
            <p class={style.value}>{measurement.date}</p>
          </div>
        )}
        {measurement.acidity && (
          <div class={style.row}>
            <p class={style.label}>Acidity (pH)</p>
            <p class={style.value}>{measurement.acidity}</p>
          </div>
        )}
        {measurement.salinity && (
          <div class={style.row}>
            <p class={style.label}>Salinity (PSU)</p>
            <p class={style.value}>{measurement.salinity}</p>
          </div>
        )}
        {measurement.tempature && (
          <div class={style.row}>
            <p class={style.label}>Tempature</p>
            <p class={style.value}>{measurement.tempature}</p>
          </div>
        )}
      </div>
    );
  }
}

Measurement.propTypes = {
  uid: PropTypes.string.isRequired,
  measurementId: PropTypes.string.isRequired,
};
