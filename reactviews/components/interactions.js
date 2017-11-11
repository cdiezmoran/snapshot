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
import {makeTable} from '../helpers/table';

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

  makeEditButton(interaction) {
    return (
      <TableRowColumn>
        <RaisedButton className="edit-button" label="Edit" onTouchTap={this.loadInteraction.bind(this, interaction._id)}  />
         <IconButton iconClassName="muidocs-icon-action-home"
           onTouchTap={this.loadInteraction.bind(this, interaction._id)}  />
      </TableRowColumn>);
  }

  renderTable() {
    return makeTable(
      this.props.interactions,
      ['date', 'interactionType', 'people', 'location'],
      this.makeEditButton.bind(this)
    );
  }

  render(){
    const tabs = this.props.interaction ?
      <InteractionComponent interaction={this.props.interaction} /> : null;

    return(
      <div>
        <h1>Interaction test</h1>
        <RaisedButton
          className="raised-button"
          label="Add"
          onTouchTap={this.addInteraction.bind(this)} />
        {this.renderTable()}
        {tabs}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    interactions: state.interactionReducer.interactions,
    interaction: state.interactionReducer.interaction
  }
};

export default connect(mapStateToProps)(InteractionsComponent);