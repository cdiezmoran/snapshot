import React from 'react';
import { connect } from 'react-redux'
import { saveOrganization,loadOrganizations,loadOrganization,
    addOrganization } from '../actions/organization.action';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn,
    TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import OrganizationComponent from './organization';
import { makeTable } from '../helpers/table';

export class OrganizationsComponent extends React.Component{
  constructor(props){
    super(props);
    this.props.dispatch(loadOrganizations());
  }

  addOrganization(){
    this.props.dispatch(addOrganization());
  }

  loadOrganization(id){
    this.props.dispatch(loadOrganization(id));
  }

  makeEditButton(organization) {
    return (
      <TableRowColumn>
        <RaisedButton
          className="edit-button"
          secondary={true}
          label="Edit"
          onTouchTap={this.loadOrganization.bind(this, organization._id)}  />
        <IconButton
          iconClassName="muidocs-icon-action-home"
          onTouchTap={this.loadOrganization.bind(this,organization._id)}  />
      </TableRowColumn>);
  }

  maybeRenderCurrentOrganization() {
    return this.props.organization ?
      (<OrganizationComponent organization={this.props.organization} />) :
      null;
  }

  renderTable() {
    return makeTable(
      this.props.organizations,
      ['called', 'longName', 'emailSuffix', 'url', 'action'],
      this.makeEditButton.bind(this)
    );
  }

  render(){
    return(
      <div>
        <h1>Organizations</h1>
        <RaisedButton
          className="raised-button"
          primary={true}
          label="Add"
          onTouchTap={this.addOrganization.bind(this)} />
        {this.renderTable()}
        <div className="table-buffer"></div>
        {this.maybeRenderCurrentOrganization()}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      organizations: state.organizationReducer.organizations,
      organization: state.organizationReducer.organization
    }
};

export default connect(mapStateToProps)(OrganizationsComponent);
