import { useState, useEffect } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import CustomerCard from '../../components/CustomerCards'
import Grid from '@mui/material/Unstable_Grid2'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(3),
    },
}))


const List = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/2/${id}`)
            .then(() => {
                const newCustomersState = customers.filter(customer => customer.id !== id)

                setCustomers(newCustomersState)
            })
    }

    const handleEditCustomer = id => {
        navigate(`/customers/edit/${id}`)
    }

    return ( <
        >
        <
        h1 > Lista de Clientes < /h1>  <
        Grid container > {
            customers.map(item => ( <
                Grid item xs = { 12 }
                md = { 4 } >
                <
                CustomerCard id = { item.id }
                name = { item.first_name }
                lastname = { item.last_name }
                email = { item.email }
                avatar = { item.avatar }
                className = { classes.card }
                onRemoveCustomer = { handleRemoveCustomer }
                onEditCustomer = { handleEditCustomer }
                />  <
                /Grid>    
            ))
        } <
        /Grid>       <
        />
    )
}

export default List