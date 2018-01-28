import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Link } from 'preact-router';

import style from './style';

export default class EditLink extends Component {
  render() {
    return (
      <Link class={style.edit} href={this.props.to}>
        Edit <i class="material-icons">mode_edit</i>
      </Link>
    );
  }
}

EditLink.propTypes = {
  to: PropTypes.string.isRequired,
};
