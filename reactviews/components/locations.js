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
import {makeTable} from '../helpers/table';

export class LocationsComponent extends React.Component{

	addLocation() {
		this.props.dispatch(addLocation());
	}

	loadLocation(id) {
		this.props.dispatch(loadLocation(id));
	}


	// render() {
	// 	var editButton = (
	// 		<div>
	// 			<RaisedButton label="Edit" onTouchTap={this.loadLocation.bind(this,c._id)}  />
	// 			<IconButton iconClassName="muidocs-icon-action-home"
	// 					 onTouchTap={this.loadLocation.bind(this,c._id)}  />
	// 		</div>);
	// }

	makeEditButton(organizationLocation) {
		return (
			<div>
				<RaisedButton label="Edit" onTouchTap={this.loadLocation.bind(this,organizationLocation._id)}  />
		 		<IconButton iconClassName="muidocs-icon-action-home"
					 onTouchTap={this.loadLocation.bind(this,organizationLocation._id)}  />
			</div>);
	}

	maybeRenderCurrentLocation() {
		return this.props.location ?
			(<LocationComponent location={this.props.location}/>) :
			null;
	}

	render() {
		console.log(this.props.organizationLocations);
		return(
			<div>
				<h1> Location </h1>
				<RaisedButton label="Add"
             onTouchTap={this.addLocation.bind(this)} />
        {this.maybeRenderCurrentLocation()}
				{makeTable(
					this.props.organizationLocations, 
					['called', 'address'], 
					this.makeEditButton.bind(this),
					(rowObj) => this.loadLocation.bind(this,rowObj._id))}
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
