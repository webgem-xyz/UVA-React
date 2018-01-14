import { h, Component } from 'preact';
import style from './style';

export default class Login extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Login</h1>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
