import { Component } from 'preact';
import style from './style';

export default class LinkRequestButton extends Component {
  render() {
    return (
      <div class={style.linkDiv}>
        <input type="button" value="Link to request" class={style.linkRequest} />
      </div>
    );
  }
}
