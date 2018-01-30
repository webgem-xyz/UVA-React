import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

// Import Components
import Header from '../../components/header/index';

// Import css
import style from './style';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.logoutConfirm = this.logoutConfirm.bind(this);
  }

  logoutConfirm(e) {
    e.preventDefault();
    const r = confirm(
      `Are you sure you want to sign out? \nYou need a proper internet connection to sign in again.`
    );
    if (r === true) {
      this.props.logout(e);
    }
  }
  render() {
    return (
      <div class={style.account}>
        <Header title="account" />
        <div class={style.accountSec}>
          <p class={style.headerP}>Account Details</p>
          <p>
            <span>Username:</span> {this.props.email}
          </p>
          <p>
            <span>First name:</span> User
          </p>
          <p>
            <span>Last name:</span> uva
          </p>
          <p>
            <span>Birth date:</span> 20-04-1990
          </p>
          <button onClick={e => this.logoutConfirm(e)} class={style.logout}>
            SIGN OUT
          </button>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  // measurements: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
