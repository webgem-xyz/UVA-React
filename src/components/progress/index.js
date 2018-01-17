import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import style from './style';

export default class ProgressBar extends Component {
  render() {
    return (
      <div class={style.progress}>
        <span class={style.progressBar} style={`width: ${this.props.progress}%;`} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
