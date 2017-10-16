import React from 'react';
import {connect} from 'react-redux'
import { savePerson,loadPersons, loadPerson, addPerson } from '../actions/person.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import PersonComponent from './person';
import { fetchContactsByPerson } from '../actions/contact.action';
import {makeTable} from '../helpers/table';

export class PersonsComponent extends React.Component{
	constructor(props){
		super(props);
		this.props.dispatch(loadPersons());
	}

	addPerson(){
		this.props.dispatch(addPerson());
	}

	loadPerson(id){
		this.props.dispatch(loadPerson(id));
		this.props.dispatch(fetchContactsByPerson(id));
	}

	makeEditButton(person) {
		return (
			<div>
				<RaisedButton label="Edit" onTouchTap={this.loadPerson.bind(this, person._id)}  />
		 		<IconButton iconClassName="muidocs-icon-action-home"
					 onTouchTap={this.loadPerson.bind(this, person._id)}  />
			</div>);
	}

	maybeRenderCurrentPerson() {
		return this.props.person ? 
			(<PersonComponent person={this.props.person}/>) :
			null;
	}

	render (){
		console.log("PEOPLE: ", this.props.people);
		
		return(
			<div>
				<h1> Person </h1>
				<RaisedButton label="Add" 
					onTouchTap={this.addPerson.bind(this)} />

				{makeTable(
					this.props.people, 
					['called', 'givenName', 'surName', 'gender', 'birthDate', 'currentOrganizations', 'action'], 
					this.makeEditButton.bind(this))}

				{this.maybeRenderCurrentPerson()}
			</div>
		)
	}
}

let mapStateToProps = (state, props) => {
    return {
      people: state.personReducer.people,
      person: state.personReducer.person
    }
};

export default connect(mapStateToProps)(PersonsComponent);
