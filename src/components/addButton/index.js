import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Link } from 'preact-router';

import style from './style';

export default class AddButton extends Component {
  render() {
    return (
      <Link class={style.button} href={this.props.to}>
        <img src={this.props.icon} height="30" alt={this.props.alt} />
        <p>{this.props.text}</p>
      </Link>
    );
  }
}

AddButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
