import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';

// Import Components
import Header from '../../components/header/index';

// Import css
import style from './style';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) + Math.floor(Math.random() * 2.5));
}

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);

    const date = new Date();

    this.state = {
      curMonth: date.getMonth(),
      curYear: date.getFullYear(),
      Data: [],
      reducedData: [],
      isReady: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.handleFilter('01', '0', 'Jan', nextProps.measurements);
    this.handleFilter('02', '1', 'Feb', nextProps.measurements);
    this.handleFilter('03', '2', 'Mar', nextProps.measurements);
    this.handleFilter('04', '3', 'Apr', nextProps.measurements);
    this.handleFilter('05', '4', 'May', nextProps.measurements);
    this.handleFilter('06', '5', 'Jun', nextProps.measurements);
    this.handleFilter('07', '6', 'Jul', nextProps.measurements);
    this.handleFilter('08', '7', 'Aug', nextProps.measurements);
    this.handleFilter('09', '8', 'Sep', nextProps.measurements);
    this.handleFilter('10', '9', 'Oct', nextProps.measurements);
    this.handleFilter('11', '10', 'Nov', nextProps.measurements);
    this.handleFilter('12', '11', 'Dec', nextProps.measurements);
  }

  handleFilter(month, numb, monthName, measurements) {
    const reducedMes = Object.keys(measurements).reduce((r, e) => {
      const splitted = measurements[e].date.split('-');
      if (month.includes(splitted[1])) r[e] = measurements[e];
      return r;
    }, {});
    const contr = Object.keys(reducedMes).length;
    const Data = [...this.state.Data];
    Data[numb] = {
      name: monthName,
      [this.state.curYear]: contr,
      [this.state.curYear - 1]: getRandomInt(15),
      [this.state.curYear - 2]: getRandomInt(21),
    };
    this.setState({
      // [monthName]: contr,
      Data,
      isReady: true,
    });
    this.newData();
  }

  newData() {
    const curData = this.state.Data;
    if (this.state.curMonth + 6 > 12) {
      const newMonth = this.state.curMonth + 6 - 12;
      const minMonth = this.state.curMonth - newMonth;
      const reducedData = curData.slice(minMonth, 12);
      this.setState({
        reducedData,
      });
    } else {
      const reducedData = curData.slice(this.state.curMonth, this.state.curMonth + 6);
      this.setState({
        reducedData,
      });
    }
  }

  render() {
    return (
      <div class={style.account}>
        <Header to="/" title="account" />
        <div class={style.contributions}>
          <h2>Contribution</h2>
          {this.state.isReady && (
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={this.state.reducedData}>
                <XAxis dataKey="name" />
                <YAxis width={30} />
                <Tooltip />
                <CartesianGrid horizontal={false} />
                <Area
                  type="monotone"
                  dataKey={`${this.state.curYear}`}
                  stackId="1"
                  stroke="#009BA4"
                  fill="#009BA4"
                />
                <Area
                  type="monotone"
                  dataKey={`${this.state.curYear - 1}`}
                  stackId="1"
                  stroke="#656565"
                  fill="#656565"
                />
                <Area
                  type="monotone"
                  dataKey={`${this.state.curYear - 2}`}
                  stackId="1"
                  stroke="#9e9e9e"
                  fill="#9e9e9e"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
        <div class={style.accountSec}>
          <p>
            <span>Account:</span> {this.props.email}
          </p>
          <button onClick={e => this.props.logout(e)} class={style.logout}>
            SIGN OUT
          </button>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  measurements: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
