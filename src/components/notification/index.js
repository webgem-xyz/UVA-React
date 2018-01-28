import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Link } from 'preact-router/match';

import style from './style';

export default class Notification extends Component {
  render() {
    const details = this.props.details;
    return (
      <Link class={style.notificationWrapper} href={details.to}>
        <p>{details.message}</p>
        <p>{details.date}</p>
      </Link>
    );
  }
}

Notification.propTypes = {
  details: PropTypes.object.isRequired,
};
