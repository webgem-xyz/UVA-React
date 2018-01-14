import { h, Component } from 'preact';
import Header from '../../components/header';
import style from './style';
import base from '../../base';

export default class Measurement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurement: {}
    }
  }

  componentWillMount(nextProps) {
    this.ref = base.bindToState(`/${this.props.uid}/mes/${this.props.measurementId}`, {
      context: this,
      state: 'measurement'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const measurement = this.state.measurement;

  }

  render() {
    const measurement = this.state.measurement;
    return (
      <div class={style.container}>
        <Header head={this.props.head} backCol="#ffffff"/>
          {measurement.longitude &&
            <div style={style.row}>
              <p style={style.label}>Longitude</p>
              <p style={style.value}>{measurement.longitude}</p>
            </div>
          }
          {measurement.latitude &&
            <div style={style.row}>
              <p style={style.label}>Latitude</p>
              <p style={style.value}>{measurement.latitude}</p>
            </div>
          }
          {measurement.date &&
            <div style={style.row}>
              <p style={style.label}>Date</p>
              <p style={style.value}>{measurement.date}</p>
            </div>
          }
          {measurement.acidity &&
            <div style={style.row}>
              <p style={style.label}>Acidity (pH)</p>
              <p style={style.value}>{measurement.acidity}</p>
            </div>
          }
          {measurement.salinity &&
            <div style={style.row}>
              <p style={style.label}>Salinity (PSU)</p>
              <p style={style.value}>{measurement.salinity}</p>
            </div>
          }
          {measurement.tempature &&
            <div style={style.row}>
              <p style={style.label}>Tempature</p>
              <p style={style.value}>{measurement.tempature}</p>
            </div>
            }
            </div>
        );
        }
      }
