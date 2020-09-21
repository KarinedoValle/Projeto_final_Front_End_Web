import React, { useState, useEffect } from 'react';
import '../../App.css'
import Cliente from './cliente'
import api from '../../services/api'

function Buscar() {
  const [clientes, setClientes] = useState([])
  const [clienteId, setClienteId] = useState({})
  const [buscaId, setBuscaId] = useState('')
  const [busca, setBusca] = useState('')

  useEffect(() => {
    api.get('/cliente').then(response => {
      setClientes(response.data)
    })

  }, [])

  useEffect(() => {
    api.get(`/cliente/${buscaId}`).then(response => {
      setClienteId(response.data)
    })

  }, [buscaId])

  const handleChange = e => {
    setBusca(e.target.value)
  }

  const handleChangeId = e => {
    setBuscaId(e.target.value)
  }

  const clienteBusca = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(busca.toLowerCase())
  )



  return (
    <div className="App">
    <h1 className="buscar">Buscar</h1>
    <div className="container col-md-12">
      <div className="busca-clientes row col-md-12">
        <div className="col-md-1"></div>
        <div className="input-busca col-md-5">
       
          <div className="buscar-por-nome">
            <form>
              <input type="text" placeholder="Buscar por nome" className="caixa-busca txtBusca" onChange={handleChange} />
              {/* <img src="images/search-icon-png-19.jpg" id="btnBusca" alt="Buscar"/> */}
            </form>
            <div className="dados-clientes">
              {clienteBusca.map(cliente => {
                return (
                  <>
                    <Cliente id={cliente.id} nome={cliente.nome} usuario={cliente.usuario} cpf={cliente.cpf} email={cliente.email} dataNascimento={cliente.dataNascimento} rua={cliente.endereco && cliente.endereco.rua} numero={cliente.endereco && cliente.endereco.numero} complemento={cliente.endereco && cliente.endereco.complemento} bairro={cliente.endereco && cliente.endereco.bairro} cidade={cliente.endereco && cliente.endereco.cidade} estado={cliente.endereco && cliente.endereco.estado} cep={cliente.endereco && cliente.endereco.cep}></Cliente>
                    <br></br>
                  </>
                )
              })}
          
          </div>
          </div>
        </div>
        
        <div className="col-md-1"></div>
        <div className="buscar-por-id col-md-5">
          <form>
            <input type="text" placeholder="Buscar por id" className="caixa-busca txtBusca" onChange={handleChangeId} />
          </form>
          <div className="dados-clientes">
            <Cliente id={clienteId.id} nome={clienteId.nome} usuario={clienteId.usuario} cpf={clienteId.cpf} email={clienteId.email} dataNascimento={clienteId.dataNascimento} rua={clienteId.endereco && clienteId.endereco.rua} numero={clienteId.endereco && clienteId.endereco.numero} complemento={clienteId.endereco && clienteId.endereco.complemento} bairro={clienteId.endereco && clienteId.endereco.bairro} cidade={clienteId.endereco && clienteId.endereco.cidade} estado={clienteId.endereco && clienteId.endereco.estado} cep={clienteId.endereco && clienteId.endereco.cep}></Cliente>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Buscar;
