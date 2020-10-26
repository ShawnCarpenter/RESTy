import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Display from '../components/display/Display';
import History from '../components/history/History';
import styles from './Resty.css';
import callApi from '../services/call-api';

export default class Resty extends Component {
  state={
    method:'GET',
    url:'',
    text:'',
    body:'',
    response:'',
    history:[]
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]:target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    callApi({
      url:this.state.url,
      method:this.state.method,
      body:this.state.body
    })
      .then(response => this.setState({ response }));
    this.setState(state => ({
      history:[
        ...state.history,
        { method:state.method, url:state.url }
      ]
    }));
  }
  
  render() {
    const { method, url, body, history, response } = this.state;
    return (
      <div className={styles.Resty}>
        <header><h1>RESTy</h1></header>
        <Controls 
          method={method}
          url={url}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Display
          data={response}
        />
        <History history={history} />
      </div>
    );
  }
}
