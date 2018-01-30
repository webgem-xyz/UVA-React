import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import style from './style';

export default class RemoveButton extends Component {
  render() {
    return (
      <input
        type="button"
        value={this.props.value}
        class={style.remove}
        onClick={() => this.props.removeField(this.props.i)}
      />
    );
  }
}

RemoveButton.propTypes = {
  removeField: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};
