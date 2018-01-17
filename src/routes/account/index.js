import { Component } from 'preact';

// Import Components
import Header from '../../components/header/index';

// Import css
import style from './style';

export default class Account extends Component {
  render() {
    return (
      <div class={style.account}>
        <Header to="/" title="account" />
        <div class={style.contributions}>
          <h2>Contribution</h2>
        </div>
      </div>
    );
  }
}
