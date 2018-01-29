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
      <div
        className={`${style.inputGroup} ${this.props.fullWidth ? style.fullWidth : style.hidden}`}
      >
        <label for={this.props.kind}>{this.props.label}</label>
        <input
          onChange={e => this.handleChange(e, this.props.kind)}
          type={this.props.type}
          step="0.00001"
          placeholder={this.props.placeholder}
          value={this.props.value}
          id={this.props.kind}
          class={style.inputField}
          autocomplete={this.props.autoComplete}
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
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
};

InputGroup.defaultProps = {
  fullWidth: false,
  type: 'text',
  autoComplete: 'off',
};
