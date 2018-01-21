import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Link } from 'preact-router';

import InputGroup from '../../components/inputGroup';
import style from './style';

// Images
import logo from '../../assets/logo.svg';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleState = this.handleState.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleState(kind, value) {
    this.setState({
      [kind]: value,
    });
  }

  render() {
    return (
      <div class={style.login}>
        <img src={logo} alt="Logo MyMarine" />
        <form
          class={style.loginForm}
          onSubmit={e => this.props.authenticate(e, this.state.email, this.state.password)}
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
            autoComplete="current-password"
          />
          <section class={style.formButtons}>
            <button type="submit" class={style.loginSub}>
              log in
            </button>
            <Link class={style.forgot} href="/forgot">
              forgot password?
            </Link>
          </section>
        </form>
        <p class={style.devider}>- or -</p>
        <Link class={style.createAccount} href="/createAccount">
          Create an account
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
