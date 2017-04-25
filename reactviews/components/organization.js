import React from 'react';
import {connect} from 'react-redux'
import { saveOrganization,createOrganization,changeOrganization,
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

  onChangeFunction(key, component, value){
    this.props.dispatch(changeOrganization(key,value));
  }

  saveOrganization(){
    if(this.props.organization._id)
      this.props.dispatch(saveOrganization(this.props.organization));
    else this.props.dispatch(createOrganization(this.props.organization));

    this.props.dispatch(loadOrganizations());
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

   console.log(this.props.organization,this.props.organization.longName);
   
    return(
      <div>
       <Tabs>
          <Tab label="Info" >
            <div>
              <p>
                All the general info about the organization
              </p>
              <TextField
                onChange={this.onChangeFunction.bind(this, "called")}
                value={this.props.organization.called}
                floatingLabelText="Called"
              />
              <TextField
                onChange={this.onChangeFunction.bind(this, "longName")}
                value={this.props.organization.longName}
                floatingLabelText="Long name"
              />
              <TextField
                onChange={this.onChangeFunction.bind(this, "emailSuffix")}
                value={this.props.organization.emailSuffix}
                floatingLabelText="Email Suffix"
              />

              <TextField
                onChange={this.onChangeFunction.bind(this, "url")}
                value={this.props.organization.url}
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

export default connect()(OrganizationComponent);