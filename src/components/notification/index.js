import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import style from './style';

export default class Notification extends Component {
  render() {
    const details = this.props.details;
    return (
      <div class={style.notificationWrapper}>
        <p>{details.message}</p>
        <p>{details.date}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  details: PropTypes.object.isRequired,
};
