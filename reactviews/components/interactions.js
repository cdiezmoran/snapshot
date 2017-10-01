import React from 'react';
import {connect} from 'react-redux'
import { saveInteraction,loadInteractions,loadInteraction, addInteraction } from '../actions/interaction.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LocationsComponent from './locations';
import InteractionComponent from './interaction';

export class InteractionsComponent extends React.Component{

    constructor(props){
      super(props);
      this.props.dispatch(loadInteractions());
    }

    addInteraction(){
      this.props.dispatch(addInteraction());
    }

    
    loadInteraction(id){
      this.props.dispatch(loadInteraction(id));
    }

    render(){

      let rows;

        if(this.props.interactions){
            rows = this.props.interactions.map( (c,index) =>{
                //need to create a function in the model to represent date and duration
              var row= 
                (<TableRow key={index}>
                  <TableRowColumn>{c.date}</TableRowColumn>
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

    let tabs;
    if(this.props.interaction){
      tabs=
        (<InteractionComponent interaction={this.props.interaction} />)
    }

          return(
            <div>
              <h1> Interaction
                <FloatingActionButton
                     onTouchTap={this.addInteraction.bind(this)}>
                     <ContentAdd /> 
                </FloatingActionButton>
              </h1>
      
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>People</TableHeaderColumn>
                    <TableHeaderColumn>Location</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows}
                </TableBody>
              </Table>
              {tabs}
            </div>
          )

    }

}

let mapStateToProps = (state, props) => {
  return {
    interactions: state.interactionReducer.interactions,
    interaction: state.interactionReducer.interaction
  }
};

export default connect(mapStateToProps)(InteractionsComponent);