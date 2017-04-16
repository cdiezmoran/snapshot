import React from 'react';
import {connect} from 'react-redux'
import { loadPerson } from '../actions/person.action';

export class PersonComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.props.dispatch(loadPerson());
  }

  render(){

    let listContacts;

    if(this.props.contacts){
      listContacts = this.props.contacts.map( (c,index) =>{
        return (<li key="{index}">{c.givenName}</li>);
      })
    }


    return(
      <div>
        <h1>Person</h1>
        <ul>
          {listContacts}
          </ul>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
    return {
      contacts: state.personReducer.contacts
    }
};

export default connect(mapStateToProps)(PersonComponent);