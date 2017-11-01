import React from 'react';
import {
  connect
} from 'react-redux'
import {findContacts} from '../actions/contact.action';
import {findLocation} from '../actions/location.action';
import {
  Tabs,
  Tab
} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  SelectField,
  MenuItem
} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AutoComplete from 'material-ui/AutoComplete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LocationsComponent from './locations';

export class InteractionComponent extends React.Component {
  

  constructor(props) {
    super(props);
    this.dataSourceContactConfig = {
      text: "forPersonFullName",
      value: '_id',
    };

    this.dataSourceLocationConfig = {
      text: "called",
      value: '_id',
    };
  }

  //validate there are no errors or debug
  handleUpdateInputForContacts(value) {
      if (!value) return;
      this.props.dispatch(findContacts(value));
    }
    //validate their are no errors or debug
  handleUpdateInputForLocation(value) {
    if (!value) return;
    this.props.dispatch(findLocation(value));
  }

  onChangeFunction(key, component, value) {
      this.props.dispatch(changeInteraction(key, value));
    }
    //add getDateFromString to Helpers
  getDateFromString(string) {
    let year = parseInt(string.substring(0, 4));
    let month = parseInt(string.substring(4, 6)) - 1;
    let day = parseInt(string.substring(6, 8));

    return new Date(year, month, day);
  }

  addContactToInteraction(contact) {
    // this.props.dispatch(onChangeFunction("atOrganization", contact));
  }
  
  addLocationToInteraction(location) {
    this.props.dispatch(onChangeFunction("atLocation", location));
  }

  render() {

    const contactsFound = this.props.findContacts.map(c=>{
      c.forPersonFullName = c.forPerson.fullName;
      return c;
    });

    return (
      <div>
        <Tabs onChange={this.changeTab} value={this.props.tab}>
           <Tab label="Info" value="info" >
             <form ref="form" id="interactionForm">
               <p>
                 All the general info about the interaction
               </p>
               <AutoComplete
                 hintText="Contacts"
                 dataSource={contactsFound}
                 dataSourceConfig={this.dataSourceContactConfig}
                 onUpdateInput={this.handleUpdateInputForContacts.bind(this)}
                 onNewRequest={this.addContactToInteraction.bind(this)}
               />
               
             {/*  <AutoComplete
                 hintText="Location"
                 dataSource={this.props.findLocation}
                 dataSourceConfig={this.dataSourceLocationConfig}
                 onNewRequest={this.addLocationToInteraction.bind(this)}
               />
             
               <SelectField
                floatingLabelText="InteractionType"
                value={this.props.interaction.interactionType}
                onChange={this.onChangeFunction.bind(this, "interactionType")}
               >
                <MenuItem value={"Email"} primaryText="Email" />
                <MenuItem value={"Call"} primaryText="Call" /> 
                <MenuItem value={"WebMeeting"} primaryText="WebMeeting" /> 
                <MenuItem value={"RanInto"} primaryText="RanInto" />
                <MenuItem value={"Meeting"} primaryText="Meeting" />
                <MenuItem value={"Drinks"} primaryText="Drinks" />
                <MenuItem value={"Meal"} primaryText="Meal" />       
               </SelectField>
           */}
            
            {
              //dates still might not work correctly, debug
              /*
               <TextField
               value={this.startTime}
               onChange={this.onChangeFunction.bind(this, "startTime")}
               floatingLabelText="StartTime" />
               
               <TextField
               value={this.endTime}
               onChange={this.onChangeFunction.bind(this, "endTime")}
               floatingLabelText="EndTime" />
                <RaisedButton label="Save"
                onTouchTap={this.saveInteraction.bind(this)} />
               */  
             }
             </form>
           </Tab>
        </Tabs>
        </div>
    );
  }

}

let mapStateToProps = (state, props) => {
  return {
    interaction: state.interactionReducer.interaction,
    contacts: state.interactionReducer.contacts,
    location: state.interactionReducer.location,
    findContacts: state.contactReducer.findContacts,
    findLocations: state.locationReducer.findLocations
  }
};

export default connect(mapStateToProps)(InteractionComponent);
