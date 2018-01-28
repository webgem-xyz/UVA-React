import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import style from './style';

export default class DateSelect extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      startDate: moment(),
    };
  }

  handleChange(date) {
    const formatDate = moment(date).format('YYYY-MM-DD');
    this.setState({
      startDate: date,
    });
    this.props.handleState('date', formatDate);
  }

  render() {
    return (
      <div class={style.dateRow}>
        <label>{this.props.label}</label>
        <div class={style.inputWrap}>
          <DatePicker
            selected={this.state.startDate}
            dateFormat="YYYY-MM-DD"
            onChange={this.handleChange}
            maxDate={moment()}
            className={style.date}
          />
          <i className="material-icons">date_range</i>
        </div>
      </div>
    );
  }
}

DateSelect.propTypes = {
  handleState: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  // startDate: PropTypes.object,
};

// DateSelect.defaultProps = {
//   startDate: moment(),
// };
