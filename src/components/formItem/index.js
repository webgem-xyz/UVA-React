import { Component } from 'preact';
import { PropTypes } from 'preact-compat';

import RemoveButton from '../../components/removeButton/';
import style from './style';

export default class FormItem extends Component {
  render() {
    return (
      <div key={this.props.item} class={style.customFormfieldWrap}>
        <label>Measurement type</label>
        <select required class={style.select} value={this.props.item}>
          <option value="acidity">Acidity (Ph)</option>
          <option value="salinity">Salinity (PSU)</option>
          <option value="tempature">Tempature</option>
        </select>
        <label>Value</label>
        <input type="number" value={this.props.value} class={style.addedInputField} />
        <RemoveButton value="remove item" removeField={this.removeField} />
      </div>
    );
  }
}

FormItem.propTypes = {
  item: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
