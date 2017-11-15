import React from 'react';
import { connect } from 'react-redux'
import { loadPersons, loadPerson, addPerson } from '../actions/person.action';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import PersonComponent from './person';
import { fetchContactsByPerson } from '../actions/contact.action';
import { makeTable } from '../helpers/table';

export class PersonsComponent extends React.Component{
	constructor(props) {
		super(props);
		this.props.dispatch(loadPersons());
	}

	addPerson() {
		this.props.dispatch(addPerson());
	}

	loadPerson(id) {
		this.props.dispatch(loadPerson(id));
		this.props.dispatch(fetchContactsByPerson(id));
	}

	makeEditButton(person) {
		return (
			<div>
				<RaisedButton
          className="edit-button-persons"
					label="Edit"
          secondary={true}
					onTouchTap={this.loadPerson.bind(this, person._id)} />
		 		<IconButton iconClassName="muidocs-icon-action-home"
					 onTouchTap={this.loadPerson.bind(this, person._id)} />
			</div>
		);
	}

	maybeRenderCurrentPerson() {
		return this.props.person ? (
			<PersonComponent person={this.props.person}/>
		) : null;
	}

	renderTable() {
		return makeTable(
			this.props.people,
			['called', 'givenName', 'surName', 'gender', 'birthDate', 'currentOrganizations', 'action'],
			this.makeEditButton.bind(this)
		);
	}

	render() {
		return(
			<div>
				<h1>People</h1>
				<RaisedButton
					className="raised-button"
          primary={true}
					label="Add"
					onTouchTap={this.addPerson.bind(this)} />
				{this.renderTable()}
        <div className="table-buffer"></div>
				{this.maybeRenderCurrentPerson()}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
  return {
    people: state.personReducer.people,
    person: state.personReducer.person
  }
};

export default connect(mapStateToProps)(PersonsComponent);
