import React from 'react';

export class Welcome extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        {this.props.children}
      </div>
    )
  }
}
