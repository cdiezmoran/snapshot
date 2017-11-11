import React from 'react';
import {connect} from 'react-redux'
import { saveOrganization,loadOrganizations,loadOrganization, addOrganization } from '../actions/organization.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import OrganizationComponent from './organization';
import {makeTable} from '../helpers/table';

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
        <RaisedButton className="edit-button" label="Edit" onTouchTap={this.loadOrganization.bind(this,organization._id)}  />
         <IconButton iconClassName="muidocs-icon-action-home"
           onTouchTap={this.loadOrganization.bind(this,organization._id)}  />
      </TableRowColumn>);
  }

  maybeRenderCurrentOrganization() {
    return this.props.organization ?
      (<OrganizationComponent organization={this.props.organization} />) :
      null;
  }

  render(){
    return(
      <div>
        <h1>Organization</h1>
        <FloatingActionButton onTouchTap={this.addOrganization.bind(this)}>
        <ContentAdd />
        </FloatingActionButton>

        {makeTable(
          this.props.organizations,
          ['called', 'longName', 'emailSuffix', 'url', 'action'],
          this.makeEditButton.bind(this))}

        {this.maybeRenderCurrentOrganization()}
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
    return {
      organizations: state.organizationReducer.organizations,
      organization: state.organizationReducer.organization
    }
};

export default connect(mapStateToProps)(OrganizationsComponent);
