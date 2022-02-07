import React, { Component } from 'react';


import { Card, CardContent } from '@material-ui/core';

export default class ExampleWrapperSimple extends Component {
  render() {
    return (
      <div className="card-box mb-4-spacing overflow-visible">
        <CardContent className="p-3">{this.props.children}</CardContent>
      </div>
    );
  }
}
