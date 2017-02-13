import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { loadEntries } from '../actions/entryActions';
import nth from 'lodash/nth';
import chunk from 'lodash/chunk';
import orderBy from 'lodash/orderBy';
import get from 'lodash/get';
import isInteger from 'lodash/isInteger';
import isString from 'lodash/isString';
import db from '../utils/db';
import DataTableHeaders from './DataTableHeaders';
import DataTableItems from './DataTableItems';
import Pagination from './Pagination';
import './DataTable.scss';

const filter = (entries, field, value) => {
  const re = new RegExp(value, 'ig');
  return entries.filter(entry => entry[field].match(re));
};

const sorter = (item, field) => {
  const value = get(item, field);
  return (isString(value)) ? value.toLowerCase() : value;
};


class DataTable extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadEntries(db.getAll());
  }

  render() {
    const filteredItems = filter(this.props.items, 'username', this.props.filters.username);
    const sortOrder = (this.props.sort.order) ? 'asc' : 'desc';
    const sorted = orderBy(filteredItems, [item => sorter(item, this.props.sort.field)], [sortOrder]);
    const pagedItems = nth(chunk(sorted, this.props.perPage), this.props.currentPage);
    const numOfItems = filteredItems.length || 0;
    return (
      <div className='DataTable'>
        <table className='table table-bordered'>
          <DataTableHeaders />
          <DataTableItems items={pagedItems} activeUser={this.props.activeUser} />
        </table>
        <Pagination numOfItems={numOfItems} />
      </div>
    );
  }
}

DataTable.defaultProps = {
  activeUser: '',
  items: [],
};

DataTable.propTypes = {
  activeUser: PropTypes.string,
  loadEntries: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired,
  items: PropTypes.array,
};


const mapStateToProps = state => ({
  activeUser: state.config.activeUser,
  currentPage: state.pagination.currentPage,
  perPage: state.config.perPage,
  filters: state.filters,
  sort: state.sort,
  items: state.entries,
});

const mapDispatchToProps = {
  loadEntries,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
