import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import {TextField, SelectField, MenuItem} from 'material-ui';
import { headerMap } from './headerMap';

const specialProperties = (props) => {
  return {
    gender: (
      <span>
        <SelectField
         floatingLabelText="Gender"
         value={props.person.gender}
         onChange={this.onSelectChangeFunction.bind(this, 'gender')}
        >
          <MenuItem value={"Male"} primaryText="Male" />
          <MenuItem value={"Female"} primaryText="Female" />
          <MenuItem value={"Other"} primaryText="Other" />
        </SelectField>
        <br />
      </span>
    ),
    organization: (
      <span>
        <AutoComplete
          hintText="Organization"
          dataSource={props.findOrganizations}
          dataSourceConfig={this.dataSourceConfig}
          onUpdateInput={this.handleUpdateInput.bind(this)}
          onNewRequest={this.addOrganizationFromPerson.bind(this)}
        />
        <br />
      </span>
    )
  };
};

export const buildFields = (properties, props) => {
  return properties.map(property => {
    if (property in specialProperties) {
      return specialProperties(props)[property];
    }
    return (
      <span>
        <TextField
          onChange={this.onChangeFunction.bind(this, property)}
          value={props.person[property] || ''}
          floatingLabelText={headerMap[property]}
        />
        <br />
      </span>
    );
  })
}