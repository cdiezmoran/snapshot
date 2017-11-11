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
  }

  handleChange(type, e) {
    this.setState({ open: !this.state.open });
    if (type) this.props.history.push(`/${type}`)
  }

  render(){
    return(
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Snapshot App"
            onLeftIconButtonTouchTap={this.handleChange.bind(this, '')}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Drawer open={this.state.open}>
            <MenuItem onTouchTap={this.handleChange.bind(this, 'organization')}>Organizations</MenuItem>
            <MenuItem onTouchTap={this.handleChange.bind(this, 'person')}>People</MenuItem>
            <MenuItem onTouchTap={this.handleChange.bind(this, 'interaction')}>Interactions</MenuItem>
            <MenuItem onTouchTap={this.handleChange.bind(this, '')}>Close</MenuItem>
          </Drawer>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
