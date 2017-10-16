import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


// Mapping key to value
const headerMap = {
  // organizationLocations
  'called': 'Name',
  'longName': 'Long Name',
  'longName': 'Long Name',
  'emailSuffix': 'Email Suffix',
  'action': 'Action',
  'url': 'URL',
  'address': 'Address'
}


const makeTable = (rowObjs, headerWhitelist, editButtonCreationFunction, rowTapFunction) => {
  // rowObjs is something like an organizationLocations
  // headerWhitelist is the fields to be rendered: ['called', 'address']
  // editButtonCreationFunction (if exists) is a function returning a jsx (react) component that will edit a particular row
  const renderedRows = rowObjs.map((row, rowIndex) => {
    const renderedColumns = headerWhitelist.map((header, headerIndex) => {
      return row[header] ? (<TableRowColumn key={headerIndex}>{row[header]}</TableRowColumn>) : null;
    });
    
    return (
      <TableRow key={rowIndex} onTouchTap={rowTapFunction ? rowTapFunction(row):null}>
        {renderedColumns}
        {editButtonCreationFunction(row)}
      </TableRow>
    );
  });

  const renderedHeaders = headerWhitelist.map((header, index) => {
    return (
      <TableHeaderColumn key={index}>{headerMap[header]}</TableHeaderColumn>
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
