import React from 'react';
import {connect} from 'react-redux'
import { loadPerson, loadPersonApi } from '../actions/person.action';

export class Welcome extends React.Component{
  
  constructor(props){
    super(props);
    this.props.dispatch(loadPersonApi());
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
        <h1>Welcome</h1>
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

export default connect(mapStateToProps)(Welcome);