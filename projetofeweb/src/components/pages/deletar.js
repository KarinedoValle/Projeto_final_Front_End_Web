import React, { useState, useEffect } from 'react'
import '../../css/bootstrap/css/bootstrap.css'
import '../../css/bootstrap/css/bootstrap-grid.css'
import '../../css/App.css'
import { Button2 } from '../others/Button2'
import {Input} from '../styles/InputAtualizarStyles'
import {Title} from '../styles/DeletarStyles'
import Cliente from '../others/cliente'
import api from '../../services/api'

export default function Deletar() {
    const [clienteId, setClienteId] = useState({})
    const [buscaId, setBuscaId] = useState('')
    useEffect(() => {
        api.get(`/cliente/${buscaId}`).then(response => {
            setClienteId(response.data)
        }).catch(erro => {               
            setClienteId('') 
         })

    }, [buscaId])

    const handleChangeId = e => {
        setBuscaId(e.target.value)
    }

    const deleteCliente = () => {
        if(buscaId === ''){
            alert("Para deletar, preencha o campo id abaixo!")
        } else{
            api.delete(`/cliente/${buscaId}`).then(response => {
                alert('Cliente deletado!')
            }).catch(erro => console.log(erro))
        }
    }
    return (

        <>
            <Title>Deletar</Title>
            <div className="container col-md-12">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="buscar-por-id col md 12">
                        <form>
                            <Input type="text" placeholder="Buscar por id" className="caixa-busca txtBusca" onChange={handleChangeId} />
                        </form>
                        <div className="dados-clientes">
                        <Cliente cliente={clienteId}></Cliente>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="col-md-12">
                    <div className="text-center text-md-center text-sm-center text-lg-center text-xl-center">
                        <h5>Tem certeza que deseja excluir esse cadastro?</h5>
                        <Button2 className='btns' buttonStyle='btns--primary' buttonSize='btns--large' onClick={deleteCliente}>Confirmar</Button2>
                    </div>
                </div>
            </div>
        </>
    )
}