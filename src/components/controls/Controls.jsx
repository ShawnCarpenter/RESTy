import React from 'react';
import PropTypes from 'prop-types';

function Controls({ method, url, onChange, onSubmit, body }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="url">URL</label>
      <input 
        type="text"
        name="url"
        id="url"
        value={url}
        onChange={onChange}
      />

      <textarea name="body" onChange={onChange} value={body} />
      <label>Method</label>
      <input 
        type="radio"
        name="method"
        value="GET" checked={method === 'GET'} onChange={onChange}/>
      <input 
        type="radio"
        name="method"
        value="POST" checked={method === 'POST'} onChange={onChange}/>
      <input 
        type="radio"
        name="method"
        value="PUT" checked={method === 'PUT'} onChange={onChange}/>
      <input 
        type="radio"
        name="method"
        value="DELETE" checked={method === 'DELETE'} onChange={onChange}/>
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
