import React from 'react';
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import PersonComponent from './person';
import {
  saveContact,
  createContact,
  removeContact,
  addContact,
  fetchContactsByPerson,
  changeContact,
  addOrganizationFromContact
} from '../actions/contact.action.js';
import AutoComplete from 'material-ui/AutoComplete';
import { findOrganizations } from '../actions/organization.action.js';

export class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.dataSourceConfig = {
      text: 'called',
      value: '_id',
    };
  }

  addContact() {
    this.props.dispatch(addContact(this.props.person._id));
  }

  saveContact() {
    if (!this.props.contact.atOrganization) {
      alert("You need an oarganization to save a contact.")
      return
    }
    if (this.props.contact._id) {
      this.props.dispatch(saveContact(this.props.contact));
    } else {
      this.props.dispatch(createContact(this.props.contact));
    }
    this.props.dispatch(fetchContactsByPerson(this.props.person._id));
  }

  removeContact() {
    this.props.dispatch(removeContact(this.props.contact._id));
  }

  handleUpdateInput(value) {
    if (!value) return;
    this.props.dispatch(findOrganizations(value));
  }

  onChangeFunction(key, input) {
    this.props.dispatch(changeContact(key, input.target.value));
  }

  addOrganizationToContact(org) {
    this.props.dispatch(changeContact("atOrganization", org));
  }

  currentOrganization(contact){
    if(contact.atOrganization)
    return contact.atOrganization.called;
  }

  render() {
    let contact;
    if (this.props.contact) {
      contact = (
        <div>
        <TextField
                onChange={this.onChangeFunction.bind(this, "title")}
                value={this.props.contact.title}
                floatingLabelText="Title"
              />
            <TextField
                onChange={this.onChangeFunction.bind(this, "email")}
                value={this.props.contact.email}
                floatingLabelText="Email"
              />

            <TextField
                onChange={this.onChangeFunction.bind(this, "mobile")}
                value={this.props.contact.mobile}
                floatingLabelText="Mobile"
              />
            <TextField
                onChange={this.onChangeFunction.bind(this, "startDate")}
                value={this.props.contact.startDate}
                floatingLabelText="Start Date"
              />

            <TextField
                onChange={this.onChangeFunction.bind(this, "endDate")}
                value={this.props.contact.endDate}
                floatingLabelText="End Date"
              />

            <TextField
                onChange={this.onChangeFunction.bind(this, "directLine")}
                value={this.props.contact.directLine}
                floatingLabelText="Direct Line"
              />

            <TextField
                onChange={this.onChangeFunction.bind(this, "officeLine")}
                value={this.props.contact.officeLine}
                floatingLabelText="Office Line"
              />

            <AutoComplete
                hintText="Organization"
                /*searchText={this.currentOrganization(this.props.contact)} */
                dataSource={this.props.findOrganizations}
                dataSourceConfig={this.dataSourceConfig}
                onUpdateInput={this.handleUpdateInput.bind(this)}
                onNewRequest={this.addOrganizationToContact.bind(this)}
            />

            <RaisedButton label="Save" onTouchTap={this.saveContact.bind(this)} />
            <RaisedButton label="Remove" onTouchTap={this.removeContact.bind(this)} />
        </div>
      );
    }

    return (
      <div>
        <FloatingActionButton onTouchTap={this.addContact.bind(this)} >
           <ContentAdd />
        </FloatingActionButton>
        {contact}
      </div>
    );
  }
}


let mapStateToProps = (state, props) => {
  return {
    contact: state.contactReducer.contact,
    contacts: state.contactReducer.contacts,
    findOrganizations: state.organizationReducer.findOrganizations
  }
};

export default connect(mapStateToProps)(ContactComponent);
