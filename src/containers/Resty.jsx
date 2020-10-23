import React, { Component } from 'react';
import Controls from '../components/controls/Controls';

export default class Resty extends Component {
  state={
    method:'',
    url:'',
    text:'',
    body:'',
    data:'',
    history:[]
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]:target.value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(state => ({
      history:[
        ...state.history,
        { method:state.method, url:state.url }
      ]
    }));
  }
  
  render() {
    const { method, url, body } = this.state;
    return (
      <div>
        {/* <h1>Hello</h1> */}
        <Controls 
          method={method}
          url={url}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
