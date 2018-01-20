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
        onClick={e => this.props.removeField(e, this.props.i)}
      />
    );
  }
}

RemoveButton.propTypes = {
  removeField: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};
