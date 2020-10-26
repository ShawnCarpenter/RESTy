import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Display = ({ data }) => {
  return (
    <div>{
      data && <ReactJson src={data} />
    }
    </div>
  );
};

Display.propTypes = {
  data:PropTypes.object
};

export default Display;
