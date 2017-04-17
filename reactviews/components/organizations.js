import React from 'react';
import {connect} from 'react-redux'
import { saveOrganization,loadOrganizations,loadOrganization, addOrganization } from '../actions/organization.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import OrganizationComponent from './organization';

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

  render(){

    let rows,rowsPeople,rowsInteractions;

    if(this.props.organizations){
      rows = this.props.organizations.map( (c,index) =>{
        return 
          (<TableRow key={index}>
            <TableRowColumn>{c.givenName}</TableRowColumn>
            <TableRowColumn>{c.givenName}</TableRowColumn>
            <TableRowColumn>
              <FontIcon className="material-icons" >edit</FontIcon>
            </TableRowColumn>
          </TableRow>);
      });
    }

    let tabs;
    if(this.props.organization){
      tabs=
        (<OrganizationComponent />)
    }



    
    return(
      <div>
        <h1>Organization 

          <FloatingActionButton onTouchTap={this.addOrganization.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>

        </h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows}
            </TableBody>
          </Table>

       {tabs}

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