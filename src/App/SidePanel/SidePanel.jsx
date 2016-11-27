/**
 * Created by matias on 11/26/16.
 */
import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';
import Menu from './Menu';
import TopBar from './TopBar';
import Directions from './Directions';
import './SidePanel.css';

const paperStyle = (muiTheme) => ({
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'inline-block',
    backgroundColor: muiTheme.palette.accent2Color
});

const panelStyle = {
    height: '100%',
    display: 'block',
    position: 'absolute',
    zIndex: 9999
};

class SidePanel extends React.Component{
    constructor(props){
        super(props);
        this.state = { menuOpened: false };
    }

    toggleMenu = () => this.setState({ menuOpened: !this.state.menuOpened });

    handleMenu = (menuOpened) => this.setState({ menuOpened });

    render = () => (
        <div id="panel" style={panelStyle}>
            <Paper style={paperStyle(this.props.muiTheme)} zDepth={2}>
                <TopBar toggleMenu={this.toggleMenu} />
                <Directions/>
            </Paper>
            <Menu handle={this.handleMenu} open={this.state.menuOpened} />
        </div>
    );
}
export default muiThemeable()(SidePanel);