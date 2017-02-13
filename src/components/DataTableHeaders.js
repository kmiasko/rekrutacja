import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeSort } from '../actions/sortActions';
import './DataTableHeaders.scss';

const HEADERS = {
  id: 'ID',
  username: 'User name',
  title: 'Post title',
  views: 'Views',
  likes: 'Likes',
  creationDate: 'Created at',
};

const DataTableHeaders = props => {
  const sort = (field) => {
    props.changeSort(field);
  };
  return (
    <thead className='DataTableItems'>
      <tr>
        { Object.keys(HEADERS).map(key => <th key={key} onClick={sort.bind(null, key)}>{HEADERS[key]}</th>) }
      </tr>
    </thead>
  );
};

DataTableHeaders.defaultProps = {
};

DataTableHeaders.propTypes = {
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  changeSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTableHeaders);
