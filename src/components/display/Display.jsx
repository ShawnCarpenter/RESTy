import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Display = ({ data }) => {
  return (
    <div >{
      data && <ReactJson 
        src={data}
        theme="monokai"
        collapsed="2" />
    }
    </div>
  );
};

Display.propTypes = {
  data:PropTypes.object
};

export default Display;
