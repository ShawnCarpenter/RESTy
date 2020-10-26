import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

function Controls({ method, url, onChange, onSubmit, body }) {
  return (
    <form onSubmit={onSubmit}
      className={styles.Controls}>
      <label htmlFor="url">URL</label>
      <input 
        type="text"
        name="url"
        id="url"
        value={url}
        onChange={onChange}
      />

      <textarea name="body" onChange={onChange} value={body} />
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
    </form>
  );
}

Controls.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired
};

export default Controls;
