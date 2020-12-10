import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { makeStyles } from '@material-ui/core/styles';


const DarkModeIcon = ({darkMode, setDarkMode}) => {
    const toggle = () => {
        const dark = !darkMode
        setDarkMode(dark)
    }

    if (darkMode) {
        return <WbSunnyIcon onClick={() => toggle()}/>
    } else {
        return <Brightness2OutlinedIcon onClick={() => toggle()}/>
    }
}

export default DarkModeIcon