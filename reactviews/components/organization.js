import React from 'react';
import {connect} from 'react-redux'
import { loadPerson, loadPersonApi } from '../actions/person.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';

export class OrganizationComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.props.dispatch(loadPerson());
  }

  handleActive(tab) {
    if(tab.props.label=="People"){

    }
  }

  render(){

    let rows;

    if(this.props.contacts){
      rows = this.props.contacts.map( (c,index) =>{
        return (<TableRow key={index}>
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

    return(
      <div>
        <h1>Organization</h1>
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



        <Tabs>
          <Tab label="Info" >
            <div>
              <h2 >Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
          <Tab label="People" >
            <div>
              <h2 >Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="Interactions"
            onActive={this.handleActive.bind(this)}
          >
            <div>
              <h2 >Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>

      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
    return {
      contacts: state.personReducer.contacts
    }
};

export default connect(mapStateToProps)(OrganizationComponent);