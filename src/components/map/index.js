import { Component } from 'preact';
import { Gmaps, Marker } from 'react-gmaps';
import { PropTypes } from 'preact-compat';

import MeasurementRow from '../measurementRow/';

import style from './style';

const params = { v: '3.exp', key: 'AIzaSyD7u386wnnjYBWpHTIioniysgDLzUdrPR4' };

export default class MapComponent extends Component {
  onMapCreated = map => {
    map.setOptions({
      disableDefaultUI: true,
    });
  };

  render() {
    const latitude = this.props.latitude;
    const longitude = this.props.longitude;
    return (
      <div class={style.location}>
        <h2 class={style.label}>{this.props.label}</h2>
        <div class={style.map}>
          <Gmaps
            width="100%"
            height="150px"
            zoom={4}
            lat={Number(latitude)}
            lng={Number(longitude)}
            params={params}
            onMapCreated={this.onMapCreated}
          >
            <Marker draggable={false} lat={Number(latitude)} lng={Number(longitude)} />
          </Gmaps>
        </div>
        <MeasurementRow label="Longitude:" value={longitude} coords />
        <MeasurementRow label="Latitude:" value={latitude} coords />
      </div>
    );
  }
}

MapComponent.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
