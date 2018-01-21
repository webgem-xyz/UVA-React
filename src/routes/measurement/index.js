import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import base from '../../base';

import Header from '../../components/header';
import MeasurementRow from '../../components/measurementRow';
import MapComponent from '../../components/map/';
import EditLink from '../../components/editLink/';

import style from './style';

export default class Measurement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurement: {},
    };
  }

  // QuickFix for issue #47 & #46 ❌
  // Temp fix (needs proper fix) ❌
  componentWillMount(nextProps) {
    this.ref = base.bindToState(`/${this.props.uid}/mes/${this.props.measurementId}`, {
      context: this,
      state: 'measurement',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // Proper way due to issue #47 and #46 this doesn't work properly at this time. https://github.com/webgem-xyz/UVA-React/issues/47 & https://github.com/webgem-xyz/UVA-React/issues/46
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     measurement: nextProps.measurements[this.props.measurementId],
  //   });
  // }

  render() {
    const measurement = this.state.measurement;
    return (
      <div class={style.container}>
        <Header title={measurement.date} to="/" />
        <div class={style.measurementWrapper}>
          <EditLink type="measurement" to={`/edit/${this.props.measurementId}`} />
          {measurement.date && <MeasurementRow label="Date" value={measurement.date} />}
          <MapComponent
            latitude={measurement.latitude}
            longitude={measurement.longitude}
            label="Location"
          />
          {measurement.acidity && <MeasurementRow label="Acidity" value={measurement.acidity} />}
          {measurement.salinity && <MeasurementRow label="Salinity" value={measurement.salinity} />}
          {measurement.tempature && (
            <MeasurementRow label="Tempature" value={measurement.tempature} />
          )}
          {/* <button
            onClick={e => {
              this.props.removeMeasurement(e, this.props.measurementId);
            }}
            class={style.removeButton}
          >
            Delete measurement
          </button> */}
        </div>
      </div>
    );
  }
}

Measurement.propTypes = {
  uid: PropTypes.string.isRequired,
  measurementId: PropTypes.string.isRequired,
  // removeMeasurement: PropTypes.func.isRequired,
};
