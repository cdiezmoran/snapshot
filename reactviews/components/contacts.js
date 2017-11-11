import React, { Component } from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import { loadContact } from '../actions/contact.action';

export class Contacts extends Component {
  loadContact(id){
    this.props.dispatch(loadContact(id));
  }

  render() {
    if (!this.props.contacts.lenght) {
      return null;
    }
    return this.props.contacts.map((c, idx) => {
      return (
        <TableRow key={idx}>
          <TableRowColumn>{c.forPerson.givenName}</TableRowColumn>
          <TableRowColumn>{c.title}</TableRowColumn>
          <TableRowColumn>{c.atOrganization ? c.atOrganization.called : ''}</TableRowColumn>
          <TableRowColumn>{c.email}</TableRowColumn>
          <TableRowColumn>{c.startDate}</TableRowColumn>
          <TableRowColumn>{c.mobile}</TableRowColumn>
          <TableRowColumn>{c.endDate}</TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              label="Edit"
              onTouchTap={this.loadContact.bind(this,c._id)}  />
            <IconButton
              iconClassName="material-icons-edit"
              onTouchTap={this.loadContact.bind(this,c._id)}  />
          </TableRowColumn>
        </TableRow>
      );
    });
  }
}

export default connect()(Contacts);
