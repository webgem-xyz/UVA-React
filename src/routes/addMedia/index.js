import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import FileUploader from 'react-firebase-file-uploader';
import moment from 'moment';

import storage from '../../storage';
import style from './style';

import InputGroup from '../../components/inputGroup/index';
import Header from '../../components/header/index';

export default class AddMedia extends Component {
  constructor() {
    super();

    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoError = this.geoError.bind(this);

    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);

    this.renderImages = this.renderImages.bind(this);

    this.handleState = this.handleState.bind(this);

    const date = new Date();
    const month = date.getMonth() + 1;

    this.state = {
      file: [],
      progress: 0,
      fileUrl: [],
      longitude: '',
      latitude: '',
      date: `${date.getFullYear()}-${month}-${date.getDate()}`,
      desc: null,
      count: 0,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, this.state.geoOptions);
  }

  handleUploadStart() {
    this.setState({
      isUploading: true,
      progress: 4,
    });
  }

  handleProgress = progress => this.setState({ progress });

  handleUploadError(error) {
    this.setState({
      isUploading: false,
    });
    console.log(error);
  }

  handleState(kind, value) {
    this.setState({
      [kind]: value,
    });
  }

  handleUploadSuccess(filename) {
    const fileUrl = this.state.fileUrl.slice();
    const file = this.state.file.slice();
    file[this.state.count] = filename;
    this.setState({
      file,
      isUploading: false,
      progress: 0,
    });
    storage
      .ref(`images/${this.props.uid}`)
      .child(filename)
      .getDownloadURL()
      .then(url => {
        fileUrl[this.state.count] = url;
        this.setState({
          fileUrl,
          count: this.state.count + 1,
        });
      });
  }

  // Getting Users GEO location
  geoSuccess(position) {
    this.setState({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  }

  geoError() {
    this.setState({
      longitude: '0',
      latitude: '0',
    });
  }

  removeImage(e, i) {
    e.preventDefault();
    const file = this.state.file.slice();
    const fileUrl = this.state.fileUrl.slice();
    file.splice(i, 1);
    fileUrl.splice(i, 1);
    this.setState({
      count: this.state.count - 1,
      file,
      fileUrl,
    });
  }

  createMeasurement(event) {
    event.preventDefault();
    const measurement = {
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      date: moment(this.date.value, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      category: this.category.value,
      desc: this.state.desc || null,
      type: 'med',
      images: this.state.count,
    };
    for (let i = 0; i < this.state.count; i += 1) {
      measurement[`media${[i]}`] = this.state.fileUrl[i];
    }
    this.props.addMeasurement(measurement);
  }

  renderImages() {
    const imagesUI = [];
    for (let i = 0; i < this.state.count; i += 1) {
      imagesUI.push(
        <div key={i} class={style.uploadedImage}>
          <input
            type="button"
            value="x"
            class={style.remove}
            onClick={e => this.removeImage(e, i)}
          />
          <button class={style.remove} onClick={e => this.removeImage(e, i)}>
            <i className={`material-icons ${style.icon}`}>close</i>
          </button>
          <img src={this.state.fileUrl[i]} alt={this.state.file[i]} />
        </div>
      );
    }
    return imagesUI || null;
  }

  render() {
    return (
      <div class={style.addMedia}>
        <Header to="/" backCol="#E7E7E7" title="add media" />
        <form onSubmit={(e) => this.createMeasurement(e)}>
          <div class={style.mainInputs}>
            <div class={style.inputRow}>
              <InputGroup
                value={this.state.longitude}
                kind="longitude"
                label="Longitude"
                placeholder="getting location.."
                handleState={this.handleState}
              />
              <InputGroup
                value={this.state.latitude}
                kind="latitude"
                label="Latitude"
                placeholder="getting location.."
                handleState={this.handleState}
              />
            </div>
            <div class={style.inputGroupDate}>
              <label for="date">Date of measurement</label>
              <input
                ref={input => (this.date = input)}
                type="text"
                placeholder="YYYY-MM-DD"
                value={this.state.date}
                id="date"
                class={style.inputField}
              />
            </div>
            <div class={style.inputGroupDate}>
              <label for="category">Category</label>
              <select id="category" class={style.select} ref={input => (this.category = input)}>
                <option selected disabled>
                  Select category
                </option>
                <option value="SOTW">State of the water</option>
                <option value="SA">Sea Animals</option>
                <option value="Co">Coral</option>
                <option value="SB">Sea Bedding</option>
              </select>
            </div>
            <InputGroup
              value={this.state.desc}
              kind="desc"
              label="Description (optional)"
              handleState={this.handleState}
              fullWidth
              placeholder=""
            />
          </div>
          {this.state.isUploading && (
            <div class={style.progress}>
              <span class={style.progressBar} style={`width: ${this.state.progress}%;`} />
            </div>
          )}
          <div class={style.imageWrap}>{this.renderImages()}</div>
          <label class={style.uploadButton}>
            <i className="material-icons">add</i>
            <FileUploader
              accept="image/*"
              hidden
              name="media"
              randomizeFilename
              storageRef={storage.ref(`images/${this.props.uid}`)}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>
          {this.state.count > 0 && (
            <button class={style.submit} type="submit">
              submit measurement
            </button>
          )}
        </form>
      </div>
    );
  }
}

AddMedia.propTypes = {
  uid: PropTypes.string.isRequired,
  addMeasurement: PropTypes.func.isRequired,
};
