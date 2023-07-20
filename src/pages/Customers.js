import { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import CustomerCard from '../components/CustomerCards'
import Grid from '@mui/material/Unstable_Grid2'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(3),
    },
}))


const Customers = () => {
    const classes = useStyles()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    return ( <
        >
        <
        h1 > Customers < /h1> <
        Grid container > {
            customers.map(item => ( <
                Grid item xs = { 12 }
                md = { 4 } >
                <
                CustomerCard name = { item.first_name }
                lastname = { item.last_name }
                email = { item.email }
                avatar = { item.avatar }
                className = { classes.card }
                /> <
                /Grid>    
            ))
        } <
        /Grid>      <
        />
    )
}

export default Customers