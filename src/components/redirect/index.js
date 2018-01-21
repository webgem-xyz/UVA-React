import { Component } from 'preact';
import { route } from 'preact-router';
import { PropTypes } from 'preact-compat';

export default class Redirect extends Component {
  componentWillMount() {
    route(this.props.to, true);
  }

  render() {
    return null;
  }
}

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
};
