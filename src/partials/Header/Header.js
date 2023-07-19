import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from './Header.style'


const Header = () => {
    const classes = useStyles()

    return ( <
        AppBar position = "static" >
        <
        Toolbar >
        <
        IconButton >
        <
        MenuIcon / >
        <
        /IconButton> <
        Typography variant = "h6"
        className = { classes.title } >
        My App <
        /Typography> <
        Button color = "inherit" > Login < /Button> <
        /Toolbar> <
        /AppBar>
    )
}

export default Header