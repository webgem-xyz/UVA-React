import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { Link } from 'preact-router/match';

import style from './style';

// Import images
import mediaIcon from '../../assets/black/media.svg';
import measurementIcon from '../../assets/black/measurements.svg';

function defineImgSrc(details) {
  if (details.type === 'mes') {
    return measurementIcon;
  } else if (details.type === 'media') {
    return mediaIcon;
  }
}

function defineImgAlt(details) {
  if (details.type === 'mes') {
    return 'Measurement icon';
  } else if (details.type === 'media') {
    return 'Media icon';
  }
}

export default class Item extends Component {
  render() {
    const details = this.props.details;
    return (
      <Link href={`/mes/${this.props.index}`} class={style.link}>
        <div class={style.itemLinkWrap}>
          <img src={defineImgSrc(details)} alt={defineImgAlt(details)} height="20" class={style.icon} />
          <p class={style.date}>{details.date}</p>
          <i className="material-icons">done</i>
        </div>
      </Link>
    );
  }
}

Item.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};
