import { Component } from 'preact';
import { Link } from 'preact-router/match';
import { PropTypes } from 'preact-compat';
import style from './style';

import arrow from '../../assets/black/arrow.svg';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <nav class={style.nav}>
          {this.props.to && (
            <Link class={style.backArrow} href={this.props.to}>
              <img src={arrow} height="25" alt="Arrow back to the previous page" />
            </Link>
          )}
          <h1>{this.props.title}</h1>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  backCol: PropTypes.string,
};

Header.defaultProps = {
  to: null,
  backCol: '#fafafa',
};
