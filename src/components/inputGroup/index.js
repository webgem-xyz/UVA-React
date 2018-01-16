import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import style from './style';

export default class InputGroup extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, kind) {
    this.props.handleState(kind, e.target.value);
  }

  render() {
    return (
      <div class={style.inputGroup}>
        <label for={this.props.kind}>{this.props.label}</label>
        <input
          onChange={(e) => this.handleChange(e, this.props.kind)}
          type="text"
          placeholder="getting location.."
          value={this.props.value}
          id={this.props.kind}
          class={style.inputField}
        />
      </div>
    );
  }
}

InputGroup.propTypes = {
  kind: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleState: PropTypes.func.isRequired,
};
