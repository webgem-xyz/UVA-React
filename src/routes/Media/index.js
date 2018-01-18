import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import Header from '../../components/header/index';
import style from './style';

export default class Media extends Component {
  constructor(props) {
    super(props);

    this.renderImagesUI = this.renderImagesUI.bind(this);

    this.state = {
      measurement: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      measurement: nextProps.measurements[this.props.mediaId],
    });
  }

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
          {/* TODO ADD MEASUREMENTS COMPONENT DATA, Awaiting new version of measurements from COEN */}
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
          {measurement.category && (
            <div class={style.row}>
              <p class={style.label}>Category</p>
              <p class={style.value}>{measurement.category}</p>
            </div>
          )}
          {measurement.desc && (
            <div className={`${style.row} ${style.rowDesc}`}>
              <p class={style.label}>Description</p>
              <p class={style.valueEditet}>{measurement.desc}</p>
            </div>
          )}
          <p class={style.label}>Media</p>
          <div class={style.mediaWrap}>{this.renderImagesUI()}</div>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  measurements: PropTypes.object.isRequired,
  mediaId: PropTypes.string.isRequired,
};
