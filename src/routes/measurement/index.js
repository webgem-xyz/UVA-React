import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Gmaps, Marker } from 'react-gmaps';

import base from '../../base';

import Header from '../../components/header';
import MeasurementRow from '../../components/measurementRow';
import style from './style';

const params = { v: '3.exp', key: 'AIzaSyD7u386wnnjYBWpHTIioniysgDLzUdrPR4' };

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

  onMapCreated = map => {
    map.setOptions({
      disableDefaultUI: true,
    });
  };

  render() {
    const measurement = this.state.measurement;
    const latitude = Number(measurement.latitude);
    const longitude = Number(measurement.longitude);
    return (
      <div class={style.container}>
        <Header title="view measurement" to="/" />
        <div class={style.map}>
          <Gmaps
            width="100%"
            height="200px"
            zoom={12}
            lat={latitude}
            lng={longitude}
            params={params}
            onMapCreated={this.onMapCreated}
          >
            <Marker draggable={false} lat={latitude} lng={longitude} />
          </Gmaps>
        </div>
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
        <button
          onClick={e => {
            this.props.removeMeasurement(e, this.props.measurementId);
          }}
          class={style.removeButton}
        >
          Delete measurement
        </button>
      </div>
    );
  }
}

Measurement.propTypes = {
  uid: PropTypes.string.isRequired,
  measurementId: PropTypes.string.isRequired,
  removeMeasurement: PropTypes.func.isRequired,
};
