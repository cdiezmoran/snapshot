import React from 'react';

export class SnapshotApp extends React.Component{
  render(){
    return(
      <div>
        <h1>Snapshot App</h1>
        {this.props.children}
      </div>
    )
  }
}
