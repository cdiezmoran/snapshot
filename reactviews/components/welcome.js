import React from 'react';
import {connect} from 'react-redux'

export class WelcomeComponent extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Welcome</h1>
      </div>
    )
  }
}


export default connect()(WelcomeComponent);