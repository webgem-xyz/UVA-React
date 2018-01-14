import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

// Import Components
import Header from '../../components/header';
import Item from '../../components/item';

import base from '../../base';

export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurements: {}
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.syncState(`/${this.props.uid}/mes/`, {
      context: this,
      state: 'measurements'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div class={style.overview}>
        <Header to="" title="dashboard" accic />
        <div class={style.add}>
          <h2>add data +</h2>
          <div class={style.addButtons}>
            <Link class={style.button}>
              <i>icon</i>
              <p>Add Measurement</p>
            </Link>
            <Link class={style.button}>
              <i>icon</i>
              <p>Add Media</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <h2>overview</h2>
            <div>
              <button>All</button>
              <button>Measurements</button>
              <button>Media</button>
            </div>
          </div>
          <div>
            <p>Type</p>
            <p>Date</p>
            <p>Uploaded</p>
          </div>
          <div>
            {
              Object
                .keys(this.state.measurements)
                .map((key) => <Item key={key} index={key} details={this.state.measurements[key]} />)
            }
          </div>
        </div>
      </div>
    );
  }
}
