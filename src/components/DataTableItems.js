import React, { PropTypes } from 'react';
import Item from './Item';
import './DataTableItems.scss';

const DataTableItems = props => (
  <tbody>
    { props.items.map(item => <Item key={item.id} {...item} activeUser={props.activeUser} />) }
  </tbody>
);

DataTableItems.defaultProps = {
  items: [],
};

DataTableItems.propTypes = {
  items: PropTypes.array,
};

export default DataTableItems;
