import React, { useState, useEffect } from 'react'
import '../../bootstrap/css/bootstrap.css'
import '../../bootstrap/css/bootstrap-grid.css'
import '../../App.css'
import { Button2 } from '../others/Button2'
import Cliente from './cliente'
import api from '../../services/api'

export default function Atualizar() {
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
            <h1 className="atualizar">Atualizar</h1>
            <div className="container col-md-12">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="buscar-por-id">
                            <form>
                                <input type="text" placeholder="Buscar por id" className="caixa-busca txtBusca" onChange={handleChangeId} />
                            </form>
                            <div className="dados-clientes">
                                <Cliente id={clienteId.id} nome={clienteId.nome} usuario={clienteId.usuario} cpf={clienteId.cpf} email={clienteId.email} dataNascimento={clienteId.dataNascimento} rua={clienteId.endereco && clienteId.endereco.rua} numero={clienteId.endereco && clienteId.endereco.numero} complemento={clienteId.endereco && clienteId.endereco.complemento} bairro={clienteId.endereco && clienteId.endereco.bairro} cidade={clienteId.endereco && clienteId.endereco.cidade} estado={clienteId.endereco && clienteId.endereco.estado} cep={clienteId.endereco && clienteId.endereco.cep}></Cliente>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <form>
                            <h3>Dados Pessoais</h3>
                            <fieldset>
                                <div class="form-group">
                                    <label for="nome">Nome do cliente</label>
                                    <input type="text" required="true" className="nome form-control" id="nome" autofocus />
                                </div>
                                <div class="form-group">
                                    <label for="usuario">Usuário</label>
                                    <input type="text" required="true" className="usuario form-control" id="usuario" />
                                </div>
                                <div class="form-group">
                                    <label for="cpf">CPF</label>
                                    <input type="text" required="true" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="000.000.000.00" className="cpf form-control" id="cpf" />
                                </div>
                                <div class="form-group">
                                    <label for="email">E-mail</label>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">@</span>
                                        <input type="email" required="true" placeholder="email@example.com" className="emai form-control" id="email" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="dataNascimento">Data de nascimento</label>
                                    <input type="text" required="true" placeholder="AAAA-MM-DD" className="dataNascimento form-control" id="dataNascimento" />
                                </div>
                                <h3>Endereço</h3>
                                <div class="form-group">
                                    <label for="rua">Rua</label>
                                    <input type="text" required="true" className="rua form-control" id="rua" />
                                </div>
                                <div class="form-group">
                                    <label for="numero">Número</label>
                                    <input type="text" required="true" className="numero form-control" id="numero" />
                                </div>
                                <div class="form-group">
                                    <label for="complemento">Complemento</label>
                                    <input type="text" className="complemento form-control" id="complemento" />
                                </div>
                                <div class="form-group">
                                    <label for="bairro">Bairro</label>
                                    <input type="text" required="true" className="bairro form-control" id="bairro" />
                                </div>
                                <div class="form-group">
                                    <label for="cidade">Cidade</label>
                                    <input type="text" required="true" className="cidade form-control" id="cidade" />
                                </div>
                                <div class="form-group">
                                    <label for="estado">Estado</label>
                                    <input type="text" required="true" className="estado form-control" id="estado" />
                                </div>
                                <div class="form-group">
                                    <label for="cep">Cep</label>
                                    <input type="text" required="true" className="cep form-control" id="cep" />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="col-md-12">
                        <div className="text-center text-md-center text-sm-center text-lg-center text-xl-center">
                            <Button2 className='btns' buttonStyle='btns--primary' buttonSize='btns--large'>Enviar</Button2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}