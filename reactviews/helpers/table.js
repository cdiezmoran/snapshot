import React from 'react';
import { headerMap } from './headerMap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const makeTable = (rowObjs, headerWhitelist, editButtonCreationFunction, rowTapFunction) => {
  // rowObjs is something like an organizationLocations
  // headerWhitelist is the fields to be rendered: ['called', 'address']
  // editButtonCreationFunction (if exists) is a function returning a jsx (react) component that will edit a particular row
  const renderedHeaders = headerWhitelist.map((header, index) => {
    return (
      <TableHeaderColumn key={index}>{headerMap[header]}</TableHeaderColumn>
    );
  });

  const renderedRows = rowObjs ? rowObjs.map((row, rowIndex) => {
    const renderedColumns = headerWhitelist.map((header, headerIndex) => {
    //  if (!row[header]) return null;

      let cellContents = row[header];
      if(!cellContents) {
        cellContents = "-"
      }
      if(Array.isArray(row[header]) && row[header][0]) {
        console.log(row[header]);
        cellContents = row[header].map(obj=>obj.called).join(', ');
      } else if (row[header] && row[header].called) {
        cellContents = row[header].called;
      }

      return (<TableRowColumn key={headerIndex}>{cellContents}</TableRowColumn>)
    });

    return (
      <TableRow key={rowIndex} onTouchTap={rowTapFunction ? rowTapFunction(row):null}>
        {renderedColumns}
        {editButtonCreationFunction(row)}
      </TableRow>
    );
  }) : null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          testing
          {renderedHeaders}
        </TableRow>
      </TableHeader>
      <TableBody>
        {renderedRows}
      </TableBody>
    </Table>
  );
}

export { makeTable };
