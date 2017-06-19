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

export class PersonsComponent extends React.Component{

	constructor(props){
		super(props);
		this.props.dispatch(loadPersons());
	}

	addPerson(){
		this.props.dispatch(addPerson());
	}

	loadPerson(id){
		console.log(id);
		this.props.dispatch(loadPerson(id));
		this.props.dispatch(fetchContactsByPerson(id));
	}

	render (){

		let rows, rowsPeople, rowsContacts, rowsInteractions;

		if(this.props.people){
			rows = this.props.people.map( (c, index) => {
				var birthDate
				if (c.birthDate) {
					birthDate = c.birthDate.toString().substring(0, 10)
				}
				var row=
				(<TableRow key={index}>
					<TableRowColumn>{c.called}</TableRowColumn>
					<TableRowColumn>{c.givenName}</TableRowColumn>
					<TableRowColumn>{c.surName}</TableRowColumn>
					<TableRowColumn>{c.gender}</TableRowColumn>
					<TableRowColumn>{birthDate}</TableRowColumn>
					<TableRowColumn>
						<RaisedButton label="Edit" onTouchTap={this.loadPerson.bind(this,c._id)}  />
						 <IconButton iconClassName="muidocs-icon-action-home"
						 onTouchTap={this.loadPerson.bind(this,c._id)}  />
					</TableRowColumn>
				</TableRow>);
				return row;
			});
		}

		let tabs;
		if(this.props.person){
			tabs=
			(<PersonComponent person={this.props.person}/>)
		}

		return(
			<div>
				<h1> Person

					 <RaisedButton label="Add"
               onTouchTap={this.addPerson.bind(this)} />
				</h1>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>Called</TableHeaderColumn>
							<TableHeaderColumn>Given Name</TableHeaderColumn>
							<TableHeaderColumn>Surname</TableHeaderColumn>
							<TableHeaderColumn>Gender</TableHeaderColumn>
							<TableHeaderColumn>Birthdate</TableHeaderColumn>
							<TableHeaderColumn>Organization</TableHeaderColumn>
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
      people: state.personReducer.people,
      person: state.personReducer.person
    }
};

export default connect(mapStateToProps)(PersonsComponent);
