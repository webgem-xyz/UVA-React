import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import style from './style';

export default class FilterButton extends Component {
  runFilter(e, filter) {
    e.preventDefault();
    this.props.handleFilter(filter);
  }

  render() {
    return (
      <button class={style.filterButton} onClick={e => this.runFilter(e, this.props.filter)}>
        <div className={`${style.visiblebutton} ${this.props.active ? style.active : ''}`}>
          <p>{this.props.text}</p>
        </div>
      </button>
    );
  }
}

FilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
