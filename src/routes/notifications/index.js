import { Component } from 'preact';
import style from './style';

import Notification from '../../components/notification/index';
import Header from '../../components/header/';

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: {
        notification1: { message: 'You have 10 uploads this week!', date: '16-01-2018' },
        notification2: { message: 'There are requests nearby', date: '15-01-2018' },
        notification3: { message: 'The data has been approved', date: '19-01-2018' },
      },
    };
  }
  render() {
    return (
      <article>
        <Header title="Notifications" />
        <section class={style.notifications}>
          {Object.keys(this.state.notifications).map(key => (
            <Notification key={key} index={key} details={this.state.notifications[key]} />
          ))}
        </section>
      </article>
    );
  }
}
