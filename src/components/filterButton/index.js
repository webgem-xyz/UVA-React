import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import style from './style';

export default class FilterButton extends Component {
  render() {
    return (
      <button class={style.filterButton}>
        <div class={style.visiblebutton}>
          <p>{this.props.filter}</p>
          <p>{this.props.text}</p>
        </div>
      </button>
    );
  }
}

FilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
