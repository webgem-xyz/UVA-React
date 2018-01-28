import { Component } from 'preact';
import Header from '../../components/header/';

import style from './style';

export default class Requests extends Component {
  render() {
    return (
      <div class={style.requests}>
        <Header title="Requests" />
        <p>This part of the application is created by another team from the UvA.</p>
      </div>
    );
  }
}
