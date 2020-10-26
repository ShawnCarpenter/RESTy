import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './History.css';

const History = ({ history }) => {
  console.log(history);
  const items = history.map(item => (
    <li key={item.url + item.method}>
      <HistoryItem
        method={item.method}
        url={item.url} />
    </li>));
  return (
    <div className={styles.History}>
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
