import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import style from './style';

export default class MeasurementRow extends Component {
  render() {
    return (
      <div
        className={`${style.row} ${this.props.desc ? style.rowDesc : ''} ${
          this.props.coords ? style.full : ''
        }`}
      >
        <p class={style.label}>{this.props.label}</p>
        <p class={style.value}>{this.props.value}</p>
      </div>
    );
  }
}

MeasurementRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  coords: PropTypes.bool,
  desc: PropTypes.bool,
};

MeasurementRow.defaultProps = {
  coords: false,
  desc: false,
};
