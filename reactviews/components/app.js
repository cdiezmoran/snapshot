import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export class SnapshotApp extends React.Component{
  constructor(props){
    super(props);
    injectTapEventPlugin();
    this.state = {open: false};
    this.handleToggle=this.handleToggle.bind(this);
    this.handleOrganization=this.handleOrganization.bind(this);
    this.handlePerson=this.handlePerson.bind(this);
  }

  handleToggle(){ 
    this.setState({open: !this.state.open});
  }
  handleOrganization(){ 
      this.setState({open: !this.state.open}); 
      this.props.history.push('/organization');
  }
  handlePerson(){ 
      this.setState({open: !this.state.open});
      this.props.history.push('/person');
    }
  

  render(){ 
    
    return(
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Snapshot App"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Drawer open={this.state.open}>
            <MenuItem onTouchTap={this.handleOrganization}>Organization</MenuItem>
            <MenuItem onTouchTap={this.handlePerson}>People</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Close</MenuItem>
          </Drawer>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
