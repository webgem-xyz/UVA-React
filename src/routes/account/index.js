import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

// Import Components
import Header from '../../components/header/index';

// Import css
import style from './style';

export default class Account extends Component {
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
          <button onClick={e => this.props.logout(e)} class={style.logout}>
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
