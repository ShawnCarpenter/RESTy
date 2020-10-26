import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const  Controls = ({ method, url, onChange, onSubmit, body }) => {
  return (
    <form onSubmit={onSubmit}
      className={styles.Controls}>
      <div>
        <label htmlFor="url">URL</label>
        <input 
          type="text"
          name="url"
          id="url"
          value={url}
          onChange={onChange}
        />
      </div>
      <div>
        <input 
          type="radio"
          name="method"
          id="get"
          value="GET"
          checked={method === 'GET'}
          onChange={onChange}
        />
        <label htmlFor="get">GET</label>

        <input 
          type="radio"
          name="method"
          id="post"
          value="POST"
          checked={method === 'POST'}
          onChange={onChange}
        />
        <label htmlFor="post">POST</label>
      
        <input 
          type="radio"
          name="method"
          id="put"
          value="PUT"
          checked={method === 'PUT'}
          onChange={onChange}
        />
        <label htmlFor="put">PUT</label>
      
        <input 
          type="radio"
          name="method"
          id="delete"
          value="DELETE"
          checked={method === 'DELETE'}
          onChange={onChange}
        />
        <label htmlFor="delete">DELETE</label>
        <button>Go</button>
      </div>
      <textarea name="body" onChange={onChange} value={body} />
      
    </form>
  );
};

Controls.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  body:PropTypes.string
};

export default Controls;
