import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url, onClick }) => {
  return (
    <button 
      onClick={onClick}
      method={method}
      url={url}
    > {method} - {url}
    </button>
  );
};

HistoryItem.propTypes = {
  method:PropTypes.string,
  url:PropTypes.string,
  onClick:PropTypes.func
};

export default HistoryItem;
