import React, {Component} from 'react'

import './styles/Clients.css'

class Clientes extends Component {

    state = {
        clients: []
    }
    
    componentDidMount(){
        fetch('/api')
            .then(result => result.json())
            .then(clients => {
                this.setState({
                    clients
                })
            })
            .catch(err => console.log(err.message))
    }

    render(){
        return(
            <table className="clients-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>E-mail</th>
                        <th>Numero</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.clients.map(client => {
                        const {client_id, name, email, phone} = client
                        return(
                            <tr key={client_id}>
                                <td>{client_id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Clientes


