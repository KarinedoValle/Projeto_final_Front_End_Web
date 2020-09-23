import React, { useState, useEffect } from 'react'
import '../../css/bootstrap/css/bootstrap.css'
import '../../css/bootstrap/css/bootstrap-grid.css'
import '../../css/App.css'
import {Input} from '../styles/InputBuscaStyles'
import {Title} from '../styles/BuscarStyles'
import Cliente from '../others/cliente'
import api from '../../services/api'

function Buscar() {
  const [cliente, setCliente] = useState([])
  const [clienteId, setClienteId] = useState({})
  const [buscaId, setBuscaId] = useState('')
  const [busca, setBusca] = useState('')

  useEffect(() => {
    api.get(`/cliente/${buscaId}`).then(response => {
        setClienteId(response.data)
    }).catch(erro => {               
      setClienteId('') 
   })

}, [buscaId])

  useEffect(() => {
    api.get('/cliente').then(response => {
      setCliente(response.data)
    })

  }, [])


  const handleChange = e => {
    setBusca(e.target.value)
  }

  const handleChangeId = e => {
    setBuscaId(e.target.value)
  }

  const clienteBusca = cliente.filter(cliente =>
    cliente.nome.toLowerCase().includes(busca.toLowerCase())
  )


  return (
    <div className="App">
    <Title>Buscar</Title>
    <div className="container col-md-12">
      <div className="busca-clientes row">
        <div className="input-busca col-md-5">
            <form>
              <Input type="text" placeholder="Buscar por nome" onChange={handleChange} />
            </form>
            <div className="dados-clientes">
              {clienteBusca.map(cliente => {
                return (
                  <>
            <div>
                <div className="dados-clientes">
                    <div className="cliente-dados-pessoais">
                        <legend>Dados do cliente</legend>
                        <table className="tabela table table-striped">
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>{cliente.id}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nome</td>
                                    <td>{cliente.nome}</td>
                                </tr>
                                <tr>
                                    <td>Usuário</td>
                                    <td>{cliente.usuario}</td>
                                </tr>
                                <tr>
                                    <td>CPF</td>
                                    <td>{cliente.cpf}</td>
                                </tr>
                                <tr>
                                    <td>E-mail</td>
                                    <td>{cliente.email}</td>
                                </tr>
                                <tr>
                                    <td>Data de nascimento</td>
                                    <td>{cliente.dataNascimento}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cliente-endereco">
                        <table className="tabela table table-striped">
                            <thead>
                                <tr>
                                    <td>Endereço:</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rua</td>
                                    <td>{cliente.endereco && cliente.endereco.rua}</td>
                                </tr>
                                <tr>
                                    <td>Número</td>
                                    <td>{cliente.endereco && cliente.endereco.numero}</td>
                                </tr>
                                <tr>
                                    <td>Complemento</td>
                                    <td>{cliente.endereco && cliente.endereco.complemento}</td>
                                </tr>
                                <tr>
                                    <td>Bairro</td>
                                    <td>{cliente.endereco && cliente.endereco.bairro}</td>
                                </tr>
                                <tr>
                                    <td>Cidade</td>
                                    <td>{cliente.endereco && cliente.endereco.cidade}</td>
                                </tr>
                                <tr>
                                    <td>Estado</td>
                                    <td>{cliente.endereco && cliente.endereco.estado}</td>
                                </tr>
                                <tr>
                                    <td>CEP</td>
                                    <td>{cliente.endereco && cliente.endereco.cep}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
                )
              })}
          
          
          </div>
        </div>
        
        <div className="col-md-1"></div>
        <div className="buscar-por-id col-md-5">
          <form>
            <Input type="text" placeholder="Buscar por id" className="caixa-busca txtBusca" onChange={handleChangeId} />
          </form>
          <div className="dados-clientes">
            <Cliente cliente={clienteId}></Cliente>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Buscar;
