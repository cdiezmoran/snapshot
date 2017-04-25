import React from 'react';
import {connect} from 'react-redux'
import { savePerson,createPerson,changePerson,loadPersons,loadPerson, addPerson } from '../actions/person.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.props.dispatch(loadPerson());
  }

  handleActive(tab) {
    if(tab.props.label=="People"){

    }
  }

  onChangeFunction(key, component, value){
    this.props.dispatch(changePerson(key,value));
  }

  savePerson(){
    if(this.props.person._id)
      this.props.dispatch(savePerson(this.props.person));
    else this.props.dispatch(createPerson(this.props.person));

    this.props.dispatch(loadPersons());
  }

  render(){

    let rows;



    return(
      <div>
       <Tabs>
          <Tab label="Info" >
            <div>
              <p>
                All the general info about the person
              </p>
              <TextField
                onChange={this.onChangeFunction.bind(this, "called")}
                value={this.props.person.called}
                floatingLabelText="Called"
              />
              <TextField
                onChange={this.onChangeFunction.bind(this, "givenName")}
                value={this.props.person.givenName}
                floatingLabelText="Given Name"
              />
              <TextField
                onChange={this.onChangeFunction.bind(this, "surName")}
                value={this.props.person.surName}
                floatingLabelText="Email Suffix"
              />
              <TextField
                onChange={this.onChangeFunction.bind(this, "gender")}
                value={this.props.person.gender}
                floatingLabelText="Gender"
              />

              <TextField
                onChange={this.onChangeFunction.bind(this, "birthday")}
                value={this.props.person.birthday}
                floatingLabelText="Birthday"
              />

               <RaisedButton label="Save" 
               onTouchTap={this.savePerson.bind(this)} />
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
    return {
      person: state.personReducer.person
    }
};

export default connect(mapStateToProps)(PersonComponent);