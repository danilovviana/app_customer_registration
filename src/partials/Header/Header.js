import * as React from 'react'
import { useState } from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
}
from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

import { useNavigate } from 'react-router-dom'
import useStyles from './Header.style'

const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        navigate(route)
        handleToggleMenu()
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
        PeopleAltIcon / >
        <
        /ListItemIcon> <
        ListItemText > Lista de Clientes < /ListItemText> <
        /ListItemButton> <
        /ListItem> <
        ListItem onClick = {
            () => handleMenuClick('/customers/add') } >
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