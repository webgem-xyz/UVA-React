import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import Header from '../../components/header';
import MeasurementRow from '../../components/measurementRow';
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
        <Header head={this.props.head} backCol="#ffffff" />
        {measurement.longitude && (
          <MeasurementRow label="Longitude" value={measurement.longitude} />
        )}
        {measurement.latitude && (
          <MeasurementRow label="Latitude" value={measurement.latitude} />
        )}
        {measurement.date && (
          <MeasurementRow label="Date" value={measurement.date} />
        )}
        {measurement.acidity && (
          <MeasurementRow label="Acidity" value={measurement.acidity} />
        )}
        {measurement.salinity && (
          <MeasurementRow label="Salinity" value={measurement.salinity} />
        )}
        {measurement.tempature && (
          <MeasurementRow label="Tempature" value={measurement.tempature} />
        )}
      </div>
    );
  }
}

Measurement.propTypes = {
  uid: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  measurementId: PropTypes.string.isRequired,
};
