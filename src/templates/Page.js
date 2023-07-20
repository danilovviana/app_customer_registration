import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

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
        Typography variant = "h2" > { title } <
        /Typography> <
        Component / >
        <
        />
    )
}

export default Page