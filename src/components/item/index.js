import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Link } from 'preact-router/match';
import style from './style';

export default class Item extends Component {
  render() {
    const details = this.props.details;
    return (
      <Link>
        <div style={style.itemLinkWrap}>
          <p style={style.date}>{details.date}</p>
        </div>
      </Link>
    );
  }
}

Item.propTypes = {
  details: PropTypes.object.isRequired,
};
