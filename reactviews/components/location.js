import React from 'react';
import {connect} from 'react-redux'
import { saveLocation,createLocation, changeLocation,loadLocations
        ,loadLocation, addLocation } from '../actions/location.action';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Contacts from './contacts';
import Contact from './contact';
import moment from 'moment';
// import Autocomplete from 'react-google-autocomplete';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export class LocationComponent extends React.Component{


  constructor(props){
    super(props);
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  saveLocation() {
    // ES6 object destructuring on props
    const { location, dispatch } = this.props;

    // Get values from inputs
    var title = document.getElementById('cTitle').value;
    var email = document.getElementById('cEmail').value;
    // dispatch save contact
  }

  onChangeFunction(key, component, value){
    this.props.dispatch(changeLocation(key,value));
  }


  render(){
    if(!this.props.location) return;

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }


    return(
      <div>
           <form ref="form" id="locationForm">
              <p>
                All the general info about the location
              </p>
              <TextField
                onChange={this.onChangeFunction.bind(this, "called")}
                value={this.props.location.name}
                floatingLabelText="Name"
              />

              <PlacesAutocomplete inputProps={inputProps} />

               <RaisedButton label="Save"
               onTouchTap={this.saveLocation.bind(this)} />
            </form>
      </div>
     )
   }
}

let mapStateToProps = (state, props) => {
    return {
      location: state.locationReducer.location,
      locations: state.locationReducer.locations
    }
};

export default connect(mapStateToProps)(LocationComponent);
