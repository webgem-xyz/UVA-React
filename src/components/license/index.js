import { Component } from 'preact';
import style from './style';

export default class LicenseInfo extends Component {
  render() {
    return (
      <div class={style.licenseWrapper}>
        <p class={style.license}>
          The code of this project is licensed under the terms of the GNU AGPLv3 license.
          <a href="https://github.com/webgem-xyz/UVA-React#license-information">More info.</a>
        </p>
      </div>
    );
  }
}
