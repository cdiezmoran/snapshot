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

export class InteractionComponent extends React.Component{

    render(){

        <div>
        <Tabs onChange={this.changeTab} value={this.props.tab}>
           <Tab label="Info" value="info" >
             <form ref="form" id="interactionForm">
               <p>
                 All the general info about the interaction
               </p>
               <AutoComplete
                 hintText="People"
                 dataSource={this.props.findPerson}
                 dataSourceConfig={this.dataSourceConfig}
                 onUpdateInput={this.handleUpdateInput.bind(this)}
                 onNewRequest={this.addPersonfromInteraction.bind(this)}
               />
               <AutoComplete
                 hintText="Location"
                 dataSource={this.props.findLocation}
                 dataSourceConfig={this.dataSourceConfig}
                 onUpdateInput={this.handleUpdateInput.bind(this)}
                 onNewRequest={this.addLocationfromInteraction.bind(this)}
               />
               
               <TextField
                 onChange={this.onChangeFunction.bind(this, "interactionType")}
                 value={this.props.interaction.interactionType}
                 floatingLabelText="InteractionType"
               />
            
               <TextField
               value={this.startTime}
               onChange={this.onChangeFunction.bind(this, "startTime")}
               floatingLabelText="StartTime" />
               
               <TextField
               value={this.endTime}
               onChange={this.onChangeFunction.bind(this, "endTime")}
               floatingLabelText="EndTime" />

                <RaisedButton label="Save"
                onTouchTap={this.saveInteraction.bind(this)} />
             </form>
           </Tab>
        </Tabs>
        </div>
    }

}