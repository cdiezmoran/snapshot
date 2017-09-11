import React from 'react';
import {connect} from 'react-redux'
import { } from '../actions/interaction.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LocationsComponent from './locations';
import InteractionComponent from './interaction';

export class InteractionsComponent extends React.Component{

    render(){
        if(this.props.interactions){
            rows = this.props.interactions.map( (c,index) =>{
                //need to create a function in the model to represent date and duration
              var row= 
                (<TableRow key={index}>
                  <TableRowColumn>{c.date}</TableRowColumn>
                  <TableRowColumn>{c.duration}</TableRowColumn>
                  <TableRowColumn>{c.interactionType}</TableRowColumn>
                  <TableRowColumn>{c.people}</TableRowColumn>
                  <TableRowColumn>{c.location}</TableRowColumn>            
                  <TableRowColumn>
                    <RaisedButton label="Edit" onTouchTap={this.loadInteraction.bind(this,c._id)}  />
                    <IconButton iconClassName="material-icons-edit"
                               onTouchTap={this.loadInteraction.bind(this,c._id)}  />
                  </TableRowColumn>
                </TableRow>);
                return row;
            });
          }

    }

}