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

export class OrganizationComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.props.dispatch(loadOrganizations());
  }

  handleActive(tab) {
    if(tab.props.label=="People"){

    }
  }

  addOrganization(){
    this.props.dispatch(addOrganization());
  }

  saveOrganization(){
    this.props.dispatch(saveOrganization(this.props.organization));
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

    if(this.props.peopleOrganization){
      rowsPeople = this.props.peopleOrganization.map( (c,index) =>{
        return 
          (<TableRow key={index}>
            <TableRowColumn>{c.givenName}</TableRowColumn>
            <TableRowColumn>{c.givenName}</TableRowColumn>
            <TableRowColumn>

              <FontIcon
                  className="muidocs-icon-edit"
                />
            </TableRowColumn>
          </TableRow>);
      });
    }

    if(this.props.peopleOrganization){
      rowsInteractions = this.props.peopleOrganization.map( (c,index) =>{
        return 
          (<TableRow key={index}>
            <TableRowColumn>{c.called}</TableRowColumn>
            <TableRowColumn>{c.url}</TableRowColumn>
            <TableRowColumn>

              <FontIcon
                  className="muidocs-icon-edit"
                />
            </TableRowColumn>
          </TableRow>);
      });
    }

    let tabs;
    if(this.props.organization){
      tabs=
        (<Tabs>
          <Tab label="Info" >
            <div>
              <p>
                All the general info about the organization
              </p>
              <TextField
                defaultValue="Default Value"
                floatingLabelText="Floating Label Text"
              />
            </div>
          </Tab>
          <Tab label="People" >
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Actions</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rowsPeople}
                </TableBody>
              </Table>
            </div>
          </Tab>
          <Tab
            label="Interactions"
            onActive={this.handleActive.bind(this)}>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Actions</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rowsInteractions}
                </TableBody>
              </Table>
            </div>
          </Tab>
        </Tabs>
      )
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

export default connect(mapStateToProps)(OrganizationComponent);