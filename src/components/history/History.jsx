import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './History.css';

const History = ({ history, onClick }) => {
  const items = history.map((item, index) => (
    <li key={item.url + item.method + index} >
      <HistoryItem
        method={item.method}
        url={item.url}
        onClick={onClick}/>
    </li>));
  return (
    <div className={styles.History}>
      <h3>History</h3>
      <ul>
        {items}
      </ul>
    </div>
  );
};

History.propTypes = {
  history:PropTypes.arrayOf(PropTypes.shape({
    method:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
  }))
};

export default History;
