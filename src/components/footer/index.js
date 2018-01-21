import { Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style';

export default class Footer extends Component {
  render() {
    return (
      <nav class={style.footer}>
        <Link activeClassName={style.active} href="/">
          <i class="material-icons">list</i>
          <span>Overview</span>
        </Link>
        <Link activeClassName={style.active} href="/request">
          <i class="material-icons">pan_tool</i>
          <span>Requests</span>
        </Link>
        <Link activeClassName={style.active} href="/account">
          <i class="material-icons">person</i>
          <span>Account</span>
        </Link>
        <Link activeClassName={style.active} href="/notifications">
          <i class="material-icons">notifications</i>
          <span>Notifications</span>
        </Link>
      </nav>
    );
  }
}
