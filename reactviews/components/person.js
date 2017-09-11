import React from 'react';
import {connect} from 'react-redux'
import { savePerson,createPerson, setTabForPerson, changePerson,loadPersons
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
import Contacts from './contacts';
import Contact from './contact';
import moment from 'moment';

export class PersonComponent extends React.Component{


  constructor(props){
    super(props);
    console.log(props);
    this.dataSourceConfig = {
      text: 'longName',
      value: '_id',
    };

    this.state = {
      currentBirthDate: null,
      tab: null
    }
    this.getDateFromString=this.getDateFromString.bind(this);
    this.changeTab=this.changeTab.bind(this);
  }


  componentWillUpdate() {
    console.log(this.props);
    if(this.props.person){
      if(!this.props.person.birthDate)this.props.person.birthDate='';
    }
    // document.querySelector('#personForm').reset();
  }

  handleActive(tab) {
    if(tab.props.label=="People"){

    }
  }

  onChangeFunction(key, component, value){
    this.props.dispatch(changePerson(key,value));
  }

  getDateFromString(string) {
    let year = parseInt(string.substring(0, 4));
    let month = parseInt(string.substring(4, 6)) - 1;
    let day = parseInt(string.substring(6, 8));

    return new Date(year, month, day);
  }

  /*
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

  saveContact() {
    // ES6 object destructuring on props
    const { person, dispatch } = this.props;

    // Get values from inputs
    var title = document.getElementById('cTitle').value;
    var email = document.getElementById('cEmail').value;
    var mobile = document.getElementById('cMobile').value;
    if(mobile) mobile=getDateFromString(mobile);

    var directLine = document.getElementById('cDirectLine').value;
    var officeLine = document.getElementById('cOfficeLine').value;
    var roleDescription = document.getElementById('cRoleDescription').value;

    var personId = person._id;

    let organizationId;
    if (person.currentOrganizations && person.currentOrganizations.length !== 0) {
      organizationId = person.currentOrganizations[0];
    }
    organizationId = person.currentOrganizations;

    var contact = {
      forPerson: personId,
      atOrganization: organizationId,
      title,
      email,
      mobile
    }

    // dispatch save contact
  }


  handleUpdateInput(value){
    if(!value) return;
    this.props.dispatch(findOrganizations(value));
  }

  addOrganizationFromPerson(org){
    this.props.dispatch(addOrganizationFromPerson(org));
  }

  removeOrganization(org){
    console.log(org);
    this.props.dispatch(removeOrganizationFromPerson(org));
  }

  changeTab(tab){
    console.log(tab);
    this.props.dispatch(setTabForPerson(tab));
  }

  render(){
    let organizations;
    if(this.props.person.currentOrganizations){
      organizations= this.props.person.currentOrganizations.map((org,i)=>{
        if(!org) return;
        return (<Chip key={i} onRequestDelete={this.removeOrganization.bind(this, org)}>
            {org.longName}
          </Chip>);
      })
    }

    
    if(this.props.person.birthDate && this.props.person.birthDate.length>10){
      let d = new Date(this.props.person.birthDate);
      this.currentBirthDate = moment(d).format('YYYY/MM/DD');
    }else this.currentBirthDate=this.props.person.birthDate;


    return(
      <div>
       <Tabs onChange={this.changeTab} value={this.props.tab}>
          <Tab label="Info" value="info" >
            <form ref="form" id="personForm">
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
           
              <TextField
              value={this.currentBirthDate}
              onChange={this.onChangeFunction.bind(this, "birthDate")}
              floatingLabelText="Birthday" />
           
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
            </form>
          </Tab>



          <Tab label="Contacts" value="contact">
           
            <Contact person={this.props.person} />

            <Contacts  contacts={this.props.contacts}/>
          </Tab>

          <Tab label="Interactions" value="interactions">
           

          </Tab>
        </Tabs>
      </div>
     )
   }
}

let mapStateToProps = (state, props) => {
    return {
      person: state.personReducer.person,
      contacts: state.contactReducer.contacts,
      tab: state.personReducer.tab,
      findOrganizations: state.organizationReducer.findOrganizations
    }
};

export default connect(mapStateToProps)(PersonComponent);
