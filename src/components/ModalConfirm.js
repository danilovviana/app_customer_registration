import * as React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,

} from '@mui/material'

const ModalConfirm = ({
    open,
    onClose,
    onConfirm,
    title,
    message,

}) => {

    return ( <
        >
        <
        Dialog open = { open }
        onClose = { onClose } >
        <
        DialogTitle id = "alert-dialog-title" > { title } <
        /DialogTitle> <
        DialogContent >
        <
        DialogContentText id = "alert-dialog-description" > { message } <
        /DialogContentText> <
        /DialogContent> <
        DialogActions >
        <
        Button onClick = { onClose } > Cancelar < /Button> <
        Button onClick = { onConfirm }
        autoFocus >
        Confirme <
        /Button> <
        /DialogActions> <
        /Dialog> <
        />
    )

}
export default ModalConfirm