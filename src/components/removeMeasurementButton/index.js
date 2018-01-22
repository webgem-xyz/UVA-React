import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import style from './style';

export default class RemoveMeasurementButton extends Component {
  render() {
    return (
      <button
        onClick={e => {
          this.props.removeMeasurement(e, this.props.Id);
        }}
        class={style.removeButton}
      >
        Delete {this.props.label}
      </button>
    );
  }
}

RemoveMeasurementButton.propTypes = {
  Id: PropTypes.string.isRequired,
  removeMeasurement: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
