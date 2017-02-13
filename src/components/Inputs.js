import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { addEntry } from '../actions/entryActions';
import { changePerPage } from '../actions/configActions';
import { changeFilter } from '../actions/filterActions';
import './Inputs.scss';

const PER_PAGE_OPTIONS = {
  '5': 5,
  '10': 10,
  '15': 15,
  '20': 20,
};

class Inputs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: {
        username: '',
      },
    };

    this.submitForm = this.submitForm.bind(this);
    this.selectPerPage = this.selectPerPage.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.runFilter = debounce(this.props.changeFilter, 300);
  }

  submitForm(e) {
    e.preventDefault();
    const title = this.title.value;

    if (!title) {
      return null;
    }

    this.props.addEntry(this.props.activeUser, title);
    this.title.value = '';
  }

  selectPerPage(e) {
    if (!e.target.value) {
      return null;
    }
    this.props.changePerPage(e.target.value);
  }

  changeFilter(e) {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({
      filters: {
        [field]: value,
      }
    });

    this.runFilter(field, value);
  }

  render() {
    return (
      <div className='Inputs mt-5'>
        <form className="form-inline d-inline-flex justify-content-center w-100" onSubmit={this.submitForm}>
          <div className='input-group w-100'>
            <input
              ref={(title) => this.title = title}
              type='text'
              className='form-control'
              placeholder='Post title'
              name='title'
            />
            <button type='submit' className='btn btn-primary'>ADD</button>
            <input
              type='text'
              className='form-control'
              placeholder='Filter username'
              name='username'
              onChange={this.changeFilter}
              value={this.state.filters.username}
            />
            <select
              className="Inputs__PerPageSelect custom-select"
              value={this.props.perPage}
              onChange={this.selectPerPage}
            >
              <option disabled>Items per page</option>
              { Object.keys(PER_PAGE_OPTIONS).map((option, i) =>
                <option key={i} value={PER_PAGE_OPTIONS[option]}>{PER_PAGE_OPTIONS[option]}</option>)}
              </select>
            </div>
          </form>
        </div>
    );
  }
}

Inputs.propTypes = {
  addEntry: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  changePerPage: PropTypes.func.isRequired,
  activeUser: PropTypes.string.isRequired,
  perPage: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  activeUser: state.config.activeUser,
  perPage: state.config.perPage,
});

const mapDispatchToProps = {
  addEntry,
  changePerPage,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
