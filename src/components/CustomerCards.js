import React, { useState } from 'react'
import classNames from 'classnames'
import makeStyles from '@mui/styles/makeStyles'

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
}))


const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
    onEditCustomer,
}) => {

    const classes = useStyles()

    const [openModal, setOpenModal] = useState(false)

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = () => {
        onRemoveCustomer(id)
        handleToggleOpenModal()
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }

    const handleEditCustomer = id => {
        onEditCustomer()
    }


    return ( <
        >
        <
        Card className = { classNames(className, classes.root) } >
        <
        CardHeader avatar = { <
            Avatar src = { avatar } >
            R <
            /Avatar>
        }
        title = { `${name} ${lastname}` }
        subheader = { email }
        />  <
        CardContent >
        <
        Typography variant = "body2"
        color = "text.secondary" >
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels,
        if you like. <
        /Typography>  <
        /CardContent> <
        CardActions >
        <
        IconButton onClick = {
            () => handleEditCustomer(id) } >
        <
        EditIcon / >
        <
        /IconButton> <
        IconButton onClick = { handleRemoveCustomer } >
        <
        DeleteIcon / >
        <
        /IconButton>  <
        /CardActions>  <
        /Card> <
        ModalConfirm open = { openModal }
        onClose = { handleToggleOpenModal }
        onConfirm = {
            () => handleConfirmModal(id) }
        title = "Deseja realmente excluir este cadastro?"
        message = "Ao confirmar, o cadastro será excluído totalmente." /
        >
        <
        />
    )
}

export default CustomerCard