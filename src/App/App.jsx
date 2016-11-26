import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue100, blue600, blue800 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Map from './Map';
import SidePanel from './SidePanel';
import './App.css';

const darkTheme = getMuiTheme({
    ...darkBaseTheme,
    palette: {
        ...darkBaseTheme.palette,
        primary1Color: blue600,
        primary2Color: blue800,
        primary3Color: blue100
    }
});

const lightTheme = getMuiTheme({
    palette: {
        primary1Color: blue600,
        primary2Color: blue800,
        primary3Color: blue100
    }
});

const App = () => (
    <MuiThemeProvider muiTheme={lightTheme}>
        <div>
            <Map />
            <SidePanel />
        </div>
    </MuiThemeProvider>
);

export default App;
