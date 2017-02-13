import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import range from 'lodash/range';
import classnames from 'classnames';
import { changePage } from '../actions/paginationActions';
import './Pagination.scss';

const Pagination = props => {
  const changePage = (page, e) => {
    e.preventDefault();
    props.changePage(page);
  };
  const numOfPages = Math.ceil(props.numOfItems / props.perPage);
  return (
    <div className='Pagination'>
      <ul className='pagination'>
        { range(numOfPages).map(page =>
          <li key={page} className={classnames('page-item', { 'active': page === props.currentPage })}>
            <a className='page-link' onClick={changePage.bind(null, page)}>{page}</a>
          </li>) }
      </ul>
    </div>
  );
};


Pagination.defaultProps = {
};

Pagination.propTypes = {
};

const mapStateToProps = state => ({
  perPage: state.config.perPage,
  currentPage: state.pagination.currentPage,
});

const mapDispatchToProps = {
  changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
