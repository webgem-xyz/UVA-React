import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import base from '../../base';

import Header from '../../components/header/index';
import MeasurementRow from '../../components/measurementRow/';

import style from './style';

export default class Media extends Component {
  constructor(props) {
    super(props);

    this.renderImagesUI = this.renderImagesUI.bind(this);

    this.state = {
      measurement: {},
    };
  }

  // QuickFix for issue #47 & #46 ❌
  componentWillMount(nextProps) {
    this.ref = base.bindToState(`/${this.props.uid}/mes/${this.props.mediaId}`, {
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

  renderImagesUI() {
    const images = [];
    for (let i = 0; i < this.state.measurement.images; i += 1) {
      images.push(
        <div key={i} class={style.imgWrap}>
          <img src={this.state.measurement[`media${i}`]} alt={this.state.measurement.category} />
        </div>
      );
    }
    return images || null;
  }
  render() {
    const measurement = this.state.measurement;
    return (
      <div class={style.media}>
        <Header title="view media" to="/" />
        <div class={style.dataWrap}>
          {measurement.longitude && (
            <MeasurementRow label="Longitude" value={measurement.longitude} />
          )}
          {measurement.latitude && <MeasurementRow label="Latitude" value={measurement.latitude} />}
          {measurement.date && <MeasurementRow label="Date" value={measurement.date} />}
          {measurement.category && <MeasurementRow label="Category" value={measurement.category} />}
          {measurement.desc && (
            <div className={`${style.row} ${style.rowDesc}`}>
              <p class={style.label}>Description</p>
              <p class={style.valueEditet}>{measurement.desc}</p>
            </div>
          )}
          <p className={`${style.label} ${style.labelMedia}`}>Media</p>
          <div class={style.mediaWrap}>{this.renderImagesUI()}</div>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  uid: PropTypes.string.isRequired,
  mediaId: PropTypes.string.isRequired,
};
