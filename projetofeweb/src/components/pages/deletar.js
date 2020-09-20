import React, { useState, useEffect } from 'react'
import '../../bootstrap/css/bootstrap.css'
import '../../bootstrap/css/bootstrap-grid.css'
import '../../App.css'
import { Button2 } from './Button2'
import Cliente from './cliente'
import api from '../../services/api'

export default function Deletar() {
    const [clienteId, setClienteId] = useState({})
    const [buscaId, setBuscaId] = useState('')
    useEffect(() => {
        api.get(`/cliente/${buscaId}`).then(response => {
            setClienteId(response.data)
        })

    }, [buscaId])
    const handleChangeId = e => {
        setBuscaId(e.target.value)
    }
    return (

        <>
            <h1 className="deletar">Deletar</h1>
            <div className="container col-md-12">
                <div className="row col-md-6">
                    <div className="col-md-4"></div>
                    <div className="buscar-por-id">
                        <form>
                            <input type="text" placeholder="Buscar por id" className="caixa-busca txtBusca" onChange={handleChangeId} />
                        </form>
                        <div className="dados-clientes">
                            <Cliente id={clienteId.id} nome={clienteId.nome} usuario={clienteId.usuario} cpf={clienteId.cpf} email={clienteId.email} dataNascimento={clienteId.dataNascimento} rua={clienteId.endereco && clienteId.endereco.rua} numero={clienteId.endereco && clienteId.endereco.numero} complemento={clienteId.endereco && clienteId.endereco.complemento} bairro={clienteId.endereco && clienteId.endereco.bairro} cidade={clienteId.endereco && clienteId.endereco.cidade} estado={clienteId.endereco && clienteId.endereco.estado} cep={clienteId.endereco && clienteId.endereco.cep}></Cliente>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="text-center text-md-center text-sm-center text-lg-center text-xl-center">
                        <h5>Tem certeza que deseja excluir esse cadastro?</h5>
                        <Button2 className='btns' buttonStyle='btns--primary' buttonSize='btns--large'>Enviar</Button2>
                    </div>
                </div>
            </div>
        </>
    )
}