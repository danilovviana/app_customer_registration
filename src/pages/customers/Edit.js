import * as React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import makeStyles from '@mui/styles/makeStyles'
import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
    status: {
        margin: theme.spacing(1),
    }
}))


const Edit = () => {
    const classes = useStyles()
    const { id } = useParams()

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        }
    })

    const [openToasty, setOpenToasty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=2${id}`)
            .then(response => {
                const { data } = response.data

                setForm({
                    name: {
                        value: data.first_name,
                        error: false,
                    },
                    job: {
                        value: data.job,
                        error: false,
                    },
                })
            })
    }, [id])


    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false

        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'É preciso digitar o nome corretamente'
            }
        }

        if (!form.job.value) {
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'É preciso digitar o cargo corretamente'
            }
        }

        if (hasError) {
            return setForm(newFormState)
        }

        axios.put(`https://reqres.in/api/users/${id}`, {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setOpenToasty(true)
            setIsLoading(false)
        })
    }


    return ( <
        >
        <
        div className = { classes.status } >
        <
        h1 > Editar Clientes < /h1> <
        /div> <
        div className = { classes.status } >
        <
        TextField error = { form.name.error }
        helperText = { form.name.error ? form.name.helperText : '' }
        id = "outlined-basic"
        label = "Digite seu nome"
        name = "name"
        variant = "outlined"
        value = { form.name.value }
        onChange = { handleInputChange }
        />  <
        /div> <
        div className = { classes.status } >
        <
        TextField error = { form.job.error }
        helperText = { form.job.error ? form.job.helperText : '' }
        id = "outlined-basic"
        label = "Digite seu cargo"
        name = "job"
        variant = "outlined"
        value = { form.job.value }
        onChange = { handleInputChange }
        /> <
        /div> <
        div className = { classes.status } >
        <
        Stack spacing = { 2 }
        direction = "row" >
        <
        Button variant = "contained"
        onClick = { handleRegisterButton }
        disabled = { isLoading } > {
            isLoading ? 'Aguarde...' : 'Salvar'
        }

        <
        /Button> <
        /Stack> <
        /div> <
        Toasty open = { openToasty }
        severity = "success"
        text = 'Registro atualizado com sucesso!'
        onClose = {
            () => setOpenToasty(false) }
        /> <
        />
    )
}

export default Edit