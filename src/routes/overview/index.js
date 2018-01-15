import { Component } from 'preact';
import { Link } from 'preact-router/match';
import { PropTypes } from 'preact-compat';
import style from './style';

// Import Components
import Header from '../../components/header';
import Item from '../../components/item';

// Import firebase
import base from '../../base';

// Import image
import addIcon from '../../assets/white/measurements.svg';
import mediaIconWhite from '../../assets/white/media.svg';

export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurements: {},
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.syncState(`/${this.props.uid}/mes/`, {
      context: this,
      state: 'measurements',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div class={style.wrapper}>
        <Header title="dashboard" accic />
        <div class={style.overview}>
          <div class={style.add}>
            <h2>add data +</h2>
            <div class={style.addButtons}>
              <Link class={style.button}>
                <img src={addIcon} height="30" alt="Add measurement icon." />
                <p>Add Measurement</p>
              </Link>
              <Link class={style.button}>
                <img src={mediaIconWhite} height="30" alt="Add media icon." />
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
            <div class={style.labels}>
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
      </div>
    );
  }
}

Overview.propTypes = {
  uid: PropTypes.string.isRequired,
};
