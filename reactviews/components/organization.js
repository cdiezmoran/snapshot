import React from 'react';
import {
  connect
} from 'react-redux'
import {
  saveOrganization,
  createOrganization,
  changeOrganization,
  loadOrganizations,
  loadOrganization,
  addOrganization
} from '../actions/organization.action';
import {
  Tabs,
  Tab
} from 'material-ui/Tabs';
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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LocationsComponent from './locations';

export class OrganizationComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeFunction(key, component, value) {
    this.props.dispatch(changeOrganization(key, value));
  }

  saveOrganization() {
    if (this.props.organization._id)
      this.props.dispatch(saveOrganization(this.props.organization));
    else this.props.dispatch(createOrganization(this.props.organization));

    this.props.dispatch(loadOrganizations());
  }

  renderTextFields(fields) {
    const fieldNameMap = {
      'called': 'Called',
      'longName': 'Long name',
      'emailSuffix': 'Email suffix',
      'url': 'URL'
    };

    return fields.map(field => {
      return (
        <TextField
          onChange={this.onChangeFunction.bind(this, field)}
          value={this.props.organization[field]}
          floatingLabelText={fieldNameMap[field]}
        />
      );
    });
  }

  render() {

    let rows, rowsPeople, rowsInteractions, rowsLocations;

    if (this.props.contacts) {
      rowsPeople = this.props.contacts.map((c, index) => {
        let givenName;
        if (c.forPerson) givenName = c.forPerson.givenName;

        return (
          <TableRow key={index}>
            <TableRowColumn>{givenName}</TableRowColumn>
            <TableRowColumn>{c.startDate}</TableRowColumn>
            <TableRowColumn>{c.endDate}</TableRowColumn>
            <TableRowColumn>

              <FontIcon
                  className="muidocs-icon-edit"
                />
            </TableRowColumn>
          </TableRow>
        );
      });
    }

    if (this.props.peopleOrganization) {
      rowsInteractions = this.props.peopleOrganization.map((c, index) => {
        return (
          <TableRow key={index}>
            <TableRowColumn>{c.called}</TableRowColumn>
            <TableRowColumn>{c.url}</TableRowColumn>
            <TableRowColumn>

              <FontIcon
                  className="muidocs-icon-edit"
                />
            </TableRowColumn>
          </TableRow>
        );
      });
    }

    if (!this.props.organization) return;


    return (


      <div>
       <Tabs>
          <Tab label="Info" >
            <div>
              <p>
                All the general info about the organization
              </p>
              {this.renderTextFields(['called', 'longName', 'emailSuffix', 'url'])}
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


          <Tab label="Locations" >
            <div>
              <LocationsComponent />
            </div>
          </Tab>


          <Tab label="Interactions" value="interactions">
          

          </Tab>
        </Tabs>

      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  return {
    organization: state.organizationReducer.organization,
    contacts: state.organizationReducer.contacts
  }
};

export default connect(mapStateToProps)(OrganizationComponent);
