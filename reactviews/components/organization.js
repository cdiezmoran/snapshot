import React from 'react';
import { connect } from 'react-redux'
import {
  saveOrganization,
  createOrganization,
  changeOrganization,
  loadOrganizations,
  loadOrganization,
  addOrganization
} from '../actions/organization.action';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LocationsComponent from './locations';
import { headerMap } from '../helpers/headerMap';

export class OrganizationComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeFunction(key, component, value) {
    this.props.dispatch(changeOrganization(key, value));
  }

  saveOrganization() {
    if (this.props.organization._id) {
      this.props.dispatch(saveOrganization(this.props.organization));
    } else {
      this.props.dispatch(createOrganization(this.props.organization));
    }
    this.props.dispatch(loadOrganizations());
  }

  renderTextFields(fields) {
    return fields.map((field, idx) => {
      return (
        <span>
          <TextField
            key={idx}
            onChange={this.onChangeFunction.bind(this, field)}
            value={this.props.organization[field]}
            floatingLabelText={headerMap[field]}
          />
          <br />
        </span>
      );
    });
  }

  maybeRenderPeopleRows() {
    return this.props.contacts ?
      this.props.contacts.map((c, idx) => {
        const givenName = c.forPerson ? c.forPerson.givenName : '';
        return (
          <TableRow key={idx}>
            <TableRowColumn>{givenName}</TableRowColumn>
            <TableRowColumn>{c.startDate}</TableRowColumn>
            <TableRowColumn>{c.endDate}</TableRowColumn>
            {/*TODO: Create edit button*/}
          </TableRow>
        );
      }) : null;
  }

  maybeRenderInteractionRows() {
    return this.props.peopleOrganization ?
      this.props.peopleOrganization.map((c, idx) => {
        return (
          <TableRow key={idx}>
            <TableRowColumn>{c.called}</TableRowColumn>
            <TableRowColumn>{c.url}</TableRowColumn>
            {/*TODO: Create edit button*/}
          </TableRow>
        );
      }) : null;
  }

  render() {
    return this.props.organization ? (
      <div>
       <Tabs>
          <Tab label="Info">
            <div className="tab-content">
              <p>All the general info about the organization</p>
              {this.renderTextFields(['called', 'longName', 'emailSuffix', 'url'])}
              <RaisedButton
                primary={true}
                label="Save"
                onTouchTap={this.saveOrganization.bind(this)} />
            </div>
          </Tab>
          <Tab label="People">
            <div className="tab-content">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Actions</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.maybeRenderPeopleRows()}
                  {this.maybeRenderInteractionRows()}
                </TableBody>
              </Table>
            </div>
          </Tab>
          <Tab label="Locations" >
            <div className="tab-content">
              <LocationsComponent />
            </div>
          </Tab>
          <Tab label="Interactions" value="interactions">
            <div className="tab-content" />
          </Tab>
        </Tabs>
      </div>
    ) : null;
  }
}

let mapStateToProps = (state, props) => {
  return {
    organization: state.organizationReducer.organization,
    contacts: state.organizationReducer.contacts
  }
};

export default connect(mapStateToProps)(OrganizationComponent);
