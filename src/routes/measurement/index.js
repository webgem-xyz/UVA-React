import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import Header from '../../components/header';
import MeasurementRow from '../../components/measurementRow';
import style from './style';

export default class Measurement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurement: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      measurement: nextProps.measurements[this.props.measurementId],
    });
  }

  render() {
    const measurement = this.state.measurement;
    return (
      <div class={style.container}>
        <Header title="view measurement" to="/" />
        {measurement.longitude && (
          <MeasurementRow label="Longitude" value={measurement.longitude} />
        )}
        {measurement.latitude && <MeasurementRow label="Latitude" value={measurement.latitude} />}
        {measurement.date && <MeasurementRow label="Date" value={measurement.date} />}
        {measurement.acidity && <MeasurementRow label="Acidity" value={measurement.acidity} />}
        {measurement.salinity && <MeasurementRow label="Salinity" value={measurement.salinity} />}
        {measurement.tempature && (
          <MeasurementRow label="Tempature" value={measurement.tempature} />
        )}
      </div>
    );
  }
}

Measurement.propTypes = {
  measurements: PropTypes.object.isRequired,
  measurementId: PropTypes.string.isRequired,
};
