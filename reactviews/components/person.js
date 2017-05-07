import React from 'react';
import {connect} from 'react-redux'
import { savePerson,createPerson,changePerson,loadPersons
        ,loadPerson, addPerson, addOrganizationFromPerson, removeOrganizationFromPerson } from '../actions/person.action';
import { findOrganizations } from '../actions/organization.action.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

export class PersonComponent extends React.Component{


  constructor(props){
    super(props);
    this.dataSourceConfig = {
      text: 'longName',
      value: '_id',
    };

    this.state = {
      currentBirthDate: null
    }
  }

  handleActive(tab) {
    if(tab.props.label=="People"){

    }
  }

  onChangeFunction(key, component, value){
    if (key === "birthDate" && value.length != 8 || value == !undefined) {
      return;
    }
    else if (key === "birthDate" && value.length == 8) {
      let year = parseInt(value.substring(0, 4));
      let month = parseInt(value.substring(4, 6)) - 1;
      let day = parseInt(value.substring(6, 8));

      let date = new Date(year, month, day);

      this.props.dispatch(changePerson(key, date));
      this.setState({ currentBirthDate: date });
      return;
    }

    this.props.dispatch(changePerson(key,value));
  }

  /**
   * When a user presses backspace on birthDate field and date is set we remove
   * the date from state and reset the text field's value
   * @param {Object} e - Event object for onKeyDown.
   */
  onDateKeyDown(e) {
    if (this.state.currentBirthDate != null) {
      // Check if keycode is backspace (Code 8) or delete (Code 46)
      if (e.keyCode === 8 || e.keyCode === 46) {
        e.target.value = "";
        this.setState({ currentBirthDate: null });
      }
    }
  }

  savePerson(){
    this.props.person.currentOrganizations = this.props.person.currentOrganizations.map(c=>{
      return c._id
    })
    if(this.props.person._id)
      this.props.dispatch(savePerson(this.props.person));
    else this.props.dispatch(createPerson(this.props.person));

    this.props.dispatch(loadPersons());
  }

  handleUpdateInput(value){
    if(!value) return;
    this.props.dispatch(findOrganizations(value));
  }

  addOrganizationFromPerson(org){
    this.props.dispatch(addOrganizationFromPerson(org));
  }

  removeOrganization(org){
    console.log(org)
    this.props.dispatch(removeOrganizationFromPerson(org));
  }

  render(){

    let organizations;
    if(this.props.person.currentOrganizations){
      organizations= this.props.person.currentOrganizations.map((org,i)=>{
        return (<Chip key={i} onRequestDelete={this.removeOrganization.bind(this, org)}>
            {org.longName}
          </Chip>);
      })
    }

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
                floatingLabelText="Surname"
              />
              <TextField
                onChange={this.onChangeFunction.bind(this, "gender")}
                value={this.props.person.gender}
                floatingLabelText="Gender"
              />

              {/* Conditional statement in react saying if currentBirthDate exists
                * render the component after the && operator.
                */}
              {this.state.currentBirthDate &&
                <TextField
                  onChange={this.onChangeFunction.bind(this, "birthDate")}
                  value={this.state.currentBirthDate.toString().substring(0, 15)}
                  onKeyDown={this.onDateKeyDown.bind(this)} // When key is pressed
                  floatingLabelText="Birthday"
                />
              }
              {!this.state.currentBirthDate && 
                <TextField
                  onChange={this.onChangeFunction.bind(this, "birthDate")}
                  floatingLabelText="Birthday"
                />
              }


              <AutoComplete
                hintText="Organization"
                dataSource={this.props.findOrganizations}
                dataSourceConfig={this.dataSourceConfig}
                onUpdateInput={this.handleUpdateInput.bind(this)}
                onNewRequest={this.addOrganizationFromPerson.bind(this)}
              />
               <div >
                {organizations}
                </div>

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
      person: state.personReducer.person,
      findOrganizations: state.organizationReducer.findOrganizations
    }
};

export default connect(mapStateToProps)(PersonComponent);
