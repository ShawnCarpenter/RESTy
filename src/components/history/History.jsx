import React from 'react';
import PropTypes from 'prop-types';

const History = ({ history }) => {
  console.log(history);
  return (
    <div>
      History page
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
