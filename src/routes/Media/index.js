import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import base from '../../base';

import Header from '../../components/header/index';
import MeasurementRow from '../../components/measurementRow/';
import MapComponent from '../../components/map/';
import EditLink from '../../components/editLink/';

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
        <Header title={measurement.date} to="/" />
        <div class={style.dataWrap}>
          <EditLink type="media" to={`/editMedia/${this.props.mediaId}`} />
          {measurement.date && <MeasurementRow label="Date" value={measurement.date} />}
          <MapComponent
            latitude={measurement.latitude}
            longitude={measurement.longitude}
            label="Location"
          />
          <section class={style.mediaRow}>
            <p className={`${style.label} ${style.labelMedia}`}>Items</p>
            <div class={style.mediaWrap}>{this.renderImagesUI()}</div>
          </section>
          {measurement.category && <MeasurementRow label="Category" value={measurement.category} />}
          {measurement.desc && <MeasurementRow label="Description" value={measurement.desc} desc />}
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  uid: PropTypes.string.isRequired,
  mediaId: PropTypes.string.isRequired,
};
