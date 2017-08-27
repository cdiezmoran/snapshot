import React from 'react';
import {connect} from 'react-redux'
import { saveLocation,loadLocations, loadLocation, addLocation } from '../actions/location.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import LocationComponent from './location';
import { fetchContactsByLocation } from '../actions/contact.action';

export class LocationsComponent extends React.Component{

	addLocation(){
		this.props.dispatch(addLocation());
	}

	loadLocation(id){
		this.props.dispatch(loadLocation(id));
	}

	render (){

		let rows, rowsPeople, rowsContacts, rowsInteractions;

		if(this.props.organizationLocations){
			rows = this.props.organizationLocations.map( (c, index) => {
			
				var row=
				(<TableRow key={index} onTouchTap={this.loadLocation.bind(this,c._id)} >
					<TableRowColumn>{c.called}</TableRowColumn>
					<TableRowColumn>{c.address}</TableRowColumn>
					<TableRowColumn>
						<RaisedButton label="Edit" onTouchTap={this.loadLocation.bind(this,c._id)}  />
						 <IconButton iconClassName="muidocs-icon-action-home"
						 onTouchTap={this.loadLocation.bind(this,c._id)}  />
					</TableRowColumn>
				</TableRow>);
				return row;
			});
		}

		let tabs;
		if(this.props.location){
			tabs=
			(<LocationComponent location={this.props.location}/>)
		}

		return(
			<div>
				<h1> Location

					 <RaisedButton label="Add"
               onTouchTap={this.addLocation.bind(this)} />
				</h1>
                {tabs}
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Address</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows}
					</TableBody>
				</Table>
			</div>
		)
	}
}

let mapStateToProps = (state, props) => {
    return {
      location: state.locationReducer.location,
	  locations: state.locationReducer.locations,
	  organizationLocations: state.organizationReducer.organization.locations
    }
};

export default connect(mapStateToProps)(LocationsComponent);
