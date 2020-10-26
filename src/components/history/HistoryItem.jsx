import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url }) => {
  return (
    <div >
      <div>{method}</div>
      <div>{url}</div>
    </div>
  );
};

HistoryItem.propTypes = {
  method:PropTypes.string,
  url:PropTypes.string
};

export default HistoryItem;
