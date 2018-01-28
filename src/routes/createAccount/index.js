import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Link } from 'preact-router/match';

import InputGroup from '../../components/inputGroup/';
import logo from '../../assets/logo.svg';
import LicenseInfo from '../../components/license/';

import style from './style';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.handleState = this.handleState.bind(this);

    this.state = {
      email: null,
      password: null,
    };
  }

  handleState(kind, value) {
    this.setState({
      [kind]: value,
    });
  }

  render() {
    return (
      <div class={style.createAccountWrapper}>
        <img src={logo} alt="Logo MyMarine" class={style.logo} />
        <form
          class={style.createAccountForm}
          onSubmit={e => this.props.createAccount(e, this.state.email, this.state.password)}
          name="Create account"
        >
          <InputGroup
            value={this.state.email}
            kind="email"
            label="Username"
            handleState={this.handleState}
            fullWidth
            placeholder="user@example.com"
            type="email"
            autoComplete="email"
          />
          <InputGroup
            value={this.state.password}
            kind="password"
            label="Password"
            handleState={this.handleState}
            fullWidth
            placeholder="*********"
            type="password"
            autoComplete="new-password"
          />
          <section class={style.formButtons}>
            <button type="submit" class={style.createAccountSubmit}>
              SIGN UP
            </button>
            <Link href="/" class={style.cancel}>
              cancel
            </Link>
          </section>
        </form>
        <LicenseInfo />
      </div>
    );
  }
}

CreateAccount.propTypes = {
  createAccount: PropTypes.func.isRequired,
};
