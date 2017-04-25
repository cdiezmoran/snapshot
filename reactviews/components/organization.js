import React from 'react';
import {connect} from 'react-redux'
import { saveOrganization,createOrganization,
  loadOrganizations,loadOrganization, addOrganization } from '../actions/organization.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class OrganizationComponent extends React.Component{
  
  constructor(props){
    super(props);
  }

  handleActive(tab) {
    if(tab.props.label=="People"){

    }
  }


  saveOrganization(){

    this.props.organization.longName = this.refs.longName.getValue();
    this.props.organization.url = this.refs.url.getValue();
    if(this.props.organization._id)
      this.props.dispatch(saveOrganization(this.props.organization));
    else this.props.dispatch(createOrganization(this.props.organization));
  }


  render(){

    let rows,rowsPeople,rowsInteractions;

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

   
    return(
      <div>
       <Tabs>
          <Tab label="Info" >
            <div>
              <p>
                All the general info about the organization
              </p>
              <TextField
                ref="longName"
                defaultValue={this.props.organization.longName}
                floatingLabelText="Long name"
              />

              <TextField
                ref="url"
                defaultValue={this.props.organization.url}
                floatingLabelText="URL"
              />

               <RaisedButton label="Save" 
               onTouchTap={this.saveOrganization.bind(this)} />
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

      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
    return {
      organization: state.organizationReducer.organization
    }
};

export default connect(mapStateToProps)(OrganizationComponent);