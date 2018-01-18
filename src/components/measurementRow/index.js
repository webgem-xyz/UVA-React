import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import style from './style';

export default class MeasurementRow extends Component {
  render() {
    return (
      <div class={style.row}>
        <p class={style.label}>{this.props.label}</p>
        <p class={style.value}>{this.props.value}</p>
      </div>
    );
  }
}

MeasurementRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
