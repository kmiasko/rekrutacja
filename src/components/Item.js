import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Item.scss';

const Item = props => (
  <tr className={classnames('Item', { 'table-warning': props.username === props.activeUser })}>
    <td>{props.id}</td>
    <td>{props.username}</td>
    <td>{props.title}</td>
    <td>{props.views}</td>
    <td>{props.likes}</td>
    <td>{props.creationDate}</td>
  </tr>
);

Item.defaultProps = {
};

Item.propTypes = {
};

export default Item;
