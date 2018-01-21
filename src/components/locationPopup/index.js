import { Component } from 'preact';
import { Gmaps, Marker } from 'react-gmaps';

import InputGroup from '../inputGroup';

import style from './style';

const params = { v: '3.exp', key: 'AIzaSyD7u386wnnjYBWpHTIioniysgDLzUdrPR4' };

export default class LocationPopup extends Component {
  render() {
    if (!this.props.open) {
      return false;
    }
    return (
      <div class={style.popup}>
        <div class={style.inputRow}>
          <InputGroup
            value={this.props.longitude}
            kind="longitude"
            label="Longitude"
            placeholder="Getting coordinates..."
            handleState={this.props.handleState}
          />
          <InputGroup
            value={this.props.latitude}
            kind="latitude"
            label="Latitude"
            placeholder="Getting coordinates..."
            handleState={this.props.handleState}
          />
        </div>
        <div class={style.inlineMap}>
          <label>Preview</label>
          <Gmaps
            width="100%"
            height="150px"
            zoom={4}
            lat={Number(this.props.latitude)}
            lng={Number(this.props.longitude)}
            params={params}
            onMapCreated={this.onMapCreated}
          >
            <Marker
              draggable={false}
              lat={Number(this.props.latitude)}
              lng={Number(this.props.longitude)}
            />
          </Gmaps>
        </div>
        <div class={style.locationSave}>
          <input type="button" value="reset to current" onClick={this.props.handleReset} />
          <input type="button" value="save location" onClick={this.props.handleSave} />
        </div>
      </div>
    );
  }
}
