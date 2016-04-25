import React from 'react';
import { Component } from 'react';
import PostsIndex from './posts_index';


export default class App extends Component {
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}
