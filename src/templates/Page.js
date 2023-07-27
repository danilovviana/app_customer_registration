import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0'
    }
}))

const Page = ({ title, Component }) => {
    const classes = useStyles()

    return ( <
        >
        <
        Typography variant = "poster"
        className = { classes.container } > { title } <
        /Typography> <
        Component / >
        <
        />
    )
}

export default Page