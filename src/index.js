import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { pink, blue } from '@mui/material/colors'

import App from './App'
import './index.css'

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secundary: {
            main: pink[300],
        },
    },
});



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( <
    React.StrictMode >
    <
    ThemeProvider theme = { theme } >
    <
    App / >
    <
    /ThemeProvider> <
    /React.StrictMode>
)