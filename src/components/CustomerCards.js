import React from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'


import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
}))


const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
    className,
}) => {
    const classes = useStyles()

    return ( <
        Card className = { classNames(className, classes.root) } >
        <
        CardHeader avatar = { <
            Avatar src = { avatar } >
            R <
            /Avatar>
        }
        title = { `${name} ${lastname}` }
        subheader = { email }
        /> <
        CardContent >
        <
        Typography variant = "body2"
        color = "text.secondary" >
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels,
        if you like. <
        /Typography> <
        /CardContent> <
        CardActions >
        <
        IconButton >
        <
        FavoriteIcon / >
        <
        /IconButton> <
        IconButton >
        <
        ShareIcon / >
        <
        /IconButton> <
        /CardActions> <
        /Card>
    )
}

export default CustomerCard