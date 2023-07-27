import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import Home from './pages/Home'

const App = () => {
    return ( <
        Router >
        <
        TemplateDefault >
        <
        Routes >
        <
        Route path = "/Customers/add"
        title = "Cadastro de clientes"
        element = { < CustomersRegister / > }
        />  <
        Route path = "/Customers"
        title = "Lista de clientes"
        element = { < CustomersList / > }
        /> <
        Route path = "/"
        title = "Página inicial"
        element = { < Home / > }
        /> <
        /Routes> <
        /TemplateDefault> <
        /Router>
    )
}

export default App