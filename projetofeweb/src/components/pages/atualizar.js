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
    const [id, setId] = useState('')
    const [cliente, setCliente] = useState()
    const [name, setName] = useState(clienteId.nome)
    const [user, setUser] = useState(clienteId.usuario)
    const [cpf, setCpf] = useState(clienteId.cpf)
    const [mail, setMail] = useState(clienteId.email)
    const [birthday, setBirthday] = useState(clienteId.dataNascimento)
    const [street, setStreet] = useState(clienteId.endereco && clienteId.endereco.rua)
    const [number, setNumber] = useState(clienteId.endereco && clienteId.endereco.numero)
    const [complement, setComplement] = useState(clienteId.endereco && clienteId.endereco.complemento)
    const [district, setDistrict] = useState(clienteId.endereco && clienteId.endereco.bairro)
    const [city, setCity] = useState(clienteId.endereco && clienteId.endereco.cidade)
    const [state, setState] = useState(clienteId.endereco && clienteId.endereco.estado)
    const [zoneCode, setZoneCode] = useState(clienteId.endereco && clienteId.endereco.cep)

    const setarId = (e) => {
        setId(e.target.value)
    }
    const setarName = (e) => {
        setName(e.target.value);
    }
    const setarUser = (e) => {
        setUser(e.target.value);
    }
    const setarCpf = (e) => {
        setCpf(e.target.value);
    }
    const setarMail = (e) => {
        setMail(e.target.value);
    }
    const setarBirthday = (e) => {
        setBirthday(e.target.value);
    }
    const setarStreet = (e) => {
        setStreet(e.target.value);
    }
    const setarNumber = (e) => {
        setNumber(e.target.value);
    }
    const setarComplement = (e) => {
        setComplement(e.target.value);
    }
    const setarDistrict = (e) => {
        setDistrict(e.target.value);
    }
    const setarCity = (e) => {
        setCity(e.target.value);
    }
    const setarState = (e) => {
        setState(e.target.value);
    }
    const setarZoneCode = (e) => {
        setZoneCode(e.target.value);
    }
    const handleChangeId = e => {
        setBuscaId(e.target.value)
    }

    const handleSubmit = () => {
        setCliente({
             nome: name,
             usuario: user,
             cpf: cpf,
             email: mail,
             dataNascimento: birthday,
             endereco: {
                 rua: street,
                 numero: number,
                 complemento: complement,
                 bairro: district,
                 cidade: city,
                 estado: state,
                 cep: zoneCode
             }
         })
     }

     useEffect(() => {
        api.put(`/cliente/${buscaId}`, cliente).then(response => {
            console.log(response.data)
        }).catch(erro => console.log(erro))
    }, [cliente])

    useEffect(() => {
        api.get(`/cliente/${buscaId}`).then(response => {
            setClienteId(response.data)
        })

    }, [buscaId])
    
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
                            <div className="form-group">
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome do cliente</label>
                                    <input type="text"  className="nome form-control" id="nome" onChange={setarName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text"  className="usuario form-control" id="usuario" onChange={setarUser} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text"  placeholder="000.000.000.00" className="cpf form-control" id="cpf" onChange={setarCpf}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                        <input type="email"  placeholder="email@example.com" className="emai form-control" id="email" onChange={setarMail}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dataNascimento">Data de nascimento</label>
                                    <input type="text"  placeholder="AAAA-MM-DD" className="dataNascimento form-control" id="dataNascimento" onChange={setarBirthday}/>
                                </div>
                                <h3>Endereço</h3>
                                <div className="form-group">
                                    <label htmlFor="rua">Rua</label>
                                    <input type="text"  className="rua form-control" id="rua" onChange={setarStreet}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="numero">Número</label>
                                    <input type="text"  className="numero form-control" id="numero" onChange={setarNumber}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complemento">Complemento</label>
                                    <input type="text" className="complemento form-control" id="complemento" onChange={setarComplement} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input type="text"  className="bairro form-control" id="bairro" onChange={setarDistrict}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text"  className="cidade form-control" id="cidade" onChange={setarCity}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text"  className="estado form-control" id="estado" onChange={setarState}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cep">Cep</label>
                                    <input type="text"  className="cep form-control" id="cep" onChange={setarZoneCode}/>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="col-md-12">
                        <div className="text-center text-md-center text-sm-center text-lg-center text-xl-center">
                            <Button2 className='btns' buttonStyle='btns--primary' buttonSize='btns--large' onClick={handleSubmit}>Enviar</Button2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}