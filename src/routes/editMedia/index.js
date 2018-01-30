import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import { route } from 'preact-router';

import base from '../../base';

import LocationPopup from '../../components/locationPopup/';
import Header from '../../components/header';
import InputGroup from '../../components/inputGroup/index';
import LinkRequestButton from '../../components/linkRequestButton/index';

import style from './style';

export default class EditMedia extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleResetLoc = this.handleResetLoc.bind(this);
    this.handleEditSave = this.handleEditSave.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeImage = this.removeImage.bind(this);

    this.state = {
      measurement: {},
      open: false,
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.fetch(`/${this.props.uid}/mes/${this.props.mediaId}`, {
      context: this,
      then(data) {
        this.setState({
          measurement: data,
        });
      },
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  showPopup(e) {
    e.preventDefault();
    this.setState({
      open: true,
    });
  }

  handleResetLoc() {
    this.setState({
      open: false,
    });
  }

  handleSave() {
    this.setState({
      open: false,
    });
  }

  handleState(kind, value) {
    const measurement = { ...this.state.measurement };
    measurement[kind] = value;
    this.setState({
      measurement,
    });
  }

  handleChange(e, kind) {
    this.handleState(kind, e.target.value);
  }

  handleEditSave() {
    const mediaId = this.props.mediaId;
    base.update(`/${this.props.uid}/mes/${this.props.mediaId}`, {
      data: this.state.measurement,
      then() {
        route(`/med/${mediaId}`);
      },
    });
  }

  removeImage(e, i) {
    e.preventDefault();
    const measurement = { ...this.state.measurement };
    measurement.images = this.state.measurement.images - 1;
    measurement[`media${i}`] = null;
    this.setState({
      measurement,
    });
  }

  renderImagesUI() {
    const images = [];
    for (let i = 0; i < this.state.measurement.images; i += 1) {
      images.push(
        <div key={i} class={style.imgWrap}>
          <button class={style.remove} onClick={e => this.removeImage(e, i)}>
            <i className={`material-icons ${style.icon}`}>close</i>
          </button>
          <img src={this.state.measurement[`media${i}`]} alt={this.state.measurement.category} />
        </div>
      );
    }
    return images || null;
  }

  render() {
    const measurement = this.state.measurement;
    return (
      <div class={style.edit}>
        <Header title="Edit media" to={`/med/${this.props.mediaId}`} />
        <section class={style.editMain}>
          <div class={style.inputWrap}>
            <InputGroup
              value={measurement.date}
              kind="date"
              label="Date"
              handleState={this.handleState}
              fullWidth
              type="date"
              placeholder=""
            />
          </div>
          <section class={style.locationEdit}>
            <label>Location</label>
            <button onClick={e => this.showPopup(e)}>
              {measurement.show || (
                <p>
                  {measurement.longitude}, {measurement.latitude}
                </p>
              )}{' '}
              <i class="material-icons">edit</i>
            </button>
          </section>
          <LocationPopup
            longitude={measurement.longitude}
            latitude={measurement.latitude}
            handleState={this.handleState}
            handleReset={this.handleResetLoc}
            open={this.state.open}
            handleSave={this.handleSave}
          />
          <div class={style.inputGroupDate}>
            <label for="category">Category</label>
            <select
              id="category"
              class={style.select}
              value={measurement.category}
              onChange={e => this.handleChange(e, 'category')}
            >
              <option value="State of the water">State of the water</option>
              <option value="Sea Animals">Sea Animals</option>
              <option value="Coral">Coral</option>
              <option value="Sea Bedding">Sea Bedding</option>
            </select>
          </div>
          <InputGroup
            value={measurement.desc}
            kind="desc"
            label="Description (optional)"
            fullWidth
            placeholder=""
            handleState={this.handleState}
          />
          <LinkRequestButton />
        </section>
        <section class={style.mediaRow}>
          <div class={style.mediaWrap}>{this.renderImagesUI()}</div>
        </section>
        <input
          type="button"
          onClick={this.handleEditSave}
          value="Save changes"
          class={style.submit}
        />
      </div>
    );
  }
}

EditMedia.propTypes = {
  uid: PropTypes.string.isRequired,
  mediaId: PropTypes.string.isRequired,
};
