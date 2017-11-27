import React, { Component } from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import { loadContact } from '../actions/contact.action';
import { makeTable } from '../helpers/table';

export class Contacts extends Component {
  loadContact(id){
    this.props.dispatch(loadContact(id));
  }

	makeEditButton(contact) {
		return (
			<div>
				<RaisedButton
          className="edit-button-contacts"
					label="Edit"
          secondary={true}
					onTouchTap={this.loadContact.bind(this, contact._id)} />
		 		<IconButton iconClassName="muidocs-icon-action-home"
					 onTouchTap={this.loadContact.bind(this, contact._id)} />
			</div>
		);
  }
  
  renderTable() {
		return makeTable(
			this.props.contacts,
			[ 'forPerson.givenName', 'title', 'atOrganization', 'email', 'startDate', 'endDate', 'mobile', 'action'],
			this.makeEditButton.bind(this)
		);
	}

  render() {
    if (!this.props.contacts.length) {
      return null;
    }
    return (
        <div>
          <h1>Contacts</h1>
          
          {this.renderTable()}
          <div className="table-buffer"></div>
        </div>
    )
    /*
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
    */
  }
}

export default connect()(Contacts);
