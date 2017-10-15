import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


// Mapping key to value
const headerMap = {
  // organizationLocations
  'called': 'Name',
  'address': 'Address'
}


const makeTable = (rowObjs, headerWhitelist, editButtonCreationFunction, rowTapFunction) => {
  // rowObjs is something like an organizationLocations
  // headerWhitelist is the fields to be rendered: ['called', 'address']
  // editButtonCreationFunction (if exists) is a function returning a jsx (react) component that will edit a particular row
  const renderedRows = rowObjs.map((row, index) => {
    const renderedColumns = headerWhitelist.map(header => {
      return (<TableRowColumn>{row[header]}</TableRowColumn>)
    });
    
    return (
      <TableRow key={index} onTouchTap={rowTapFunction(row)}>
        {renderedColumns}
        {editButtonCreationFunction(row)}
      </TableRow>
    );
  });

  const renderedHeaders = headerWhitelist.map(header => {
    return (
      <TableHeaderColumn>{headerMap[header]}</TableHeaderColumn>
    );
  });

  return (<Table>
    <TableHeader>
      <TableRow>
        {renderedHeaders}
      </TableRow>
    </TableHeader>
    <TableBody>
      {renderedRows}
    </TableBody>
  </Table>);
}


export {
  makeTable
};
