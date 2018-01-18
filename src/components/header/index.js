import { Component } from 'preact';
import { Link } from 'preact-router/match';
import { PropTypes } from 'preact-compat';
import style from './style';

import arrow from '../../assets/black/arrow.svg';
import accountIcon from '../../assets/black/account.svg';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header} style={`--header-background: ${this.props.backCol}`}>
        <nav class={style.nav}>
          {this.props.to && (
            <Link class={style.backArrow} href={this.props.to}>
              <img src={arrow} height="25" alt="Arrow back to the previous page" />
            </Link>
          )}
          <h1>{this.props.title}</h1>
          {this.props.accic && (
            <Link class={style.account} href="/account">
              <img src={accountIcon} height="25" alt="Link to account page." />
            </Link>
          )}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  accic: PropTypes.bool,
  backCol: PropTypes.string,
};

Header.defaultProps = {
  to: null,
  accic: false,
  backCol: '#fafafa',
};
