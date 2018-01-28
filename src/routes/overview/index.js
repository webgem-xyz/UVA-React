import { Component } from 'preact';
import { PropTypes } from 'preact-compat';
import style from './style';

// Import Components
import Header from '../../components/header';
import Item from '../../components/item';
import AddButton from '../../components/addButton/index';
import FilterButton from '../../components/filterButton/index';

// Import image
import addIcon from '../../assets/white/measurements.svg';
import mediaIcon from '../../assets/white/media.svg';

export default class Overview extends Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);

    this.state = {
      filteredMeasurements: props.measurements,
      all: true,
      mes: false,
      med: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filteredMeasurements: nextProps.measurements });
  }

  handleFilter(filter) {
    if (filter === 'all') {
      this.setState({
        filteredMeasurements: this.props.measurements,
        all: true,
        mes: false,
        med: false,
      });
    } else {
      const filteredMes = Object.keys(this.props.measurements).reduce((r, e) => {
        if (filter.includes(this.props.measurements[e].type)) r[e] = this.props.measurements[e];
        return r;
      }, {});
      this.setState({
        filteredMeasurements: filteredMes,
        all: false,
        mes: false,
        med: false,
        [filter]: true,
      });
    }
  }

  render() {
    return (
      <div class={style.wrapper}>
        <Header title="overview" />
        <div class={style.overview}>
          <div class={style.add}>
            <div class={style.addButtons}>
              <AddButton
                to="/add"
                icon={addIcon}
                alt="Add measurement icon."
                text="Add Measurement"
              />
              <AddButton to="/addMedia" icon={mediaIcon} alt="Add media icon." text="Add Media" />
            </div>
          </div>
          <div>
            <div class={style.headWrap}>
              <div class={style.buttonWrap}>
                <FilterButton
                  filter="all"
                  active={this.state.all}
                  handleFilter={this.handleFilter}
                  text="All"
                />
                <FilterButton
                  filter="mes"
                  active={this.state.mes}
                  handleFilter={this.handleFilter}
                  text="Measurements"
                />
                <FilterButton
                  filter="med"
                  active={this.state.med}
                  handleFilter={this.handleFilter}
                  text="Media"
                />
              </div>
            </div>
            <div class={style.labels}>
              <p>Type</p>
              <p>Date</p>
              <p>Editable</p>
              <p>Status</p>
            </div>
            <div>
              {Object.keys(this.state.filteredMeasurements)
                .reverse()
                .map(key => <Item key={key} index={key} details={this.props.measurements[key]} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  measurements: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
