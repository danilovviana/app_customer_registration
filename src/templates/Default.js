import Container from '@mui/material/Container'
import makeStyles from '@mui/styles/makeStyles'

import Header from '../partials/Header/Header'

const useStyles = makeStyles(() => ({
    container: {
        padding: '50px 0'
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()
    return ( <
        >
        <
        Header / >
        <
        Container className = { classes.container } > { children } <
        /Container> <
        />
    )

}

export default Default