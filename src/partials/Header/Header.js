import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded'

import useStyles from './Header.style'

import { Link } from 'react-router-dom'

const Header = () => {
    const classes = useStyles()
    const history = Link

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        history.push()
        handleToggleMenu(route)
    }

    return ( <
        >
        <
        AppBar position = "static" >
        <
        Toolbar >
        <
        IconButton onClick = {
            () => handleToggleMenu() } >
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
        /AppBar> <
        Drawer open = { menuOpen }
        onClose = {
            () => handleToggleMenu() } >
        <
        List >
        <
        ListItem onClick = {
            () => handleMenuClick('/') } >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        HomeRoundedIcon / >
        <
        /ListItemIcon> <
        ListItemText > Home < /ListItemText> <
        /ListItemButton> <
        /ListItem> <
        ListItem onClick = {
            () => handleMenuClick('/customers') } >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        GroupAddRoundedIcon / >
        <
        /ListItemIcon> <
        ListItemText > Cadastro de Clientes < /ListItemText> <
        /ListItemButton> <
        /ListItem> <
        /List> <
        /Drawer> <
        />
    )
}

export default Header