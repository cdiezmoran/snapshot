import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

export class Contacts extends Component{

  loadContact(id){
    this.props.dispatch(loadContact(id));
  }

    render(){
        let rows;
        if(this.props.contacts){
        rows = this.props.contacts.map( (c,index) =>{
            var row= 
            (<TableRow key={index}>
            <TableRowColumn>{c.forPerson.givenName}</TableRowColumn>
            <TableRowColumn>{c.title}</TableRowColumn>
            <TableRowColumn>{c.email}</TableRowColumn>
            <TableRowColumn>{c.startDate}</TableRowColumn>
            <TableRowColumn>{c.mobile}</TableRowColumn>
            <TableRowColumn>{c.endDate}</TableRowColumn>      
                <TableRowColumn>
                <RaisedButton label="Edit" onTouchTap={this.loadContact.bind(this,c._id)}  />
                <IconButton iconClassName="material-icons-edit"
                            onTouchTap={this.loadContact.bind(this,c._id)}  />
                </TableRowColumn>
            </TableRow>);
            return row;
        });
        }
    }

}