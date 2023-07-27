import * as React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    status: {
        margin: theme.spacing(1),
    }
}))


const Home = () => {
    const classes = useStyles()

    return (

        <
        div className = { classes.status } >
        <
        h1 > Home < /h1> <
        /div>
    )
}

export default Home