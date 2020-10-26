import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view'; 
import styles from './Display.css';

const Display = ({ data }) => {
  return (
    <div className={styles.Display}>{
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
