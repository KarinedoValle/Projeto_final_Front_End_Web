import React, { useState, useEffect } from 'react'
//import { format, parseISO } from 'date-fns';
import '../../css/bootstrap/css/bootstrap.css'
import '../../css/bootstrap/css/bootstrap-grid.css'
import '../../css/App.css'
import { Button2 } from '../others/Button2'
import { Input } from '../styles/InputAtualizarStyles'
import { Title } from '../styles/AtualizarStyles'
import Cliente from '../others/cliente'
import api from '../../services/api'

export default function Atualizar() {
    const [clienteId, setClienteId] = useState({})
    const [buscaId, setBuscaId] = useState('')
    const [cliente, setCliente] = useState({})
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [cpf, setCpf] = useState('')
    const [mail, setMail] = useState('')
    var [birthday, setBirthday] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zoneCode, setZoneCode] = useState('')
    
    const handleChangeId = e => {
        setBuscaId(e.target.value)
    }

    const handleSubmit = () => {
        //Formatando a data
        //*birthday = birthday.substr(0,10).split('/').reverse().join('-')
        //inserir como string
        //* birthday = birthday.concat("T00:00:00Z")
        console.log(birthday)
        //inserir como date
        //    birthday = parseISO(birthday)
        //    birthday = format(birthday, "yyyy-MM-dd'T00:00:00Z'")
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
        api.get(`/cliente/${buscaId}`).then(response => { 
            setarCliente(response.data)
            setClienteId(response.data) 
        }).catch(erro => {               
            setClienteId('') 
         })
    }, [buscaId])

    useEffect(() => {
        if (cliente !== {} && buscaId !== '') {
            api.put(`/cliente/${buscaId}`, cliente).then(response => {
                alert("Cliente atualizado!")
            }).catch(erro => {
                console.log(erro)
            })
        }
    }, [cliente])

    const setarCliente = (cliente) => {
        setName(cliente.nome)
        setUser(cliente.usuario)
        setCpf(cliente.cpf)
        setMail(cliente.email)
        setBirthday(cliente.dataNascimento)
        setStreet(cliente.endereco && cliente.endereco.rua)
        setNumber(cliente.endereco && cliente.endereco.numero)
        setComplement(cliente.endereco && cliente.endereco.complemento)
        setDistrict(cliente.endereco && cliente.endereco.bairro)
        setCity(cliente.endereco && cliente.endereco.cidade)
        setState(cliente.endereco && cliente.endereco.estado)
        setZoneCode(cliente.endereco && cliente.endereco.cep)
    }
    return (

        <>
            <Title>Atualizar</Title>
            <div className="container col-md-12">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="buscar-por-id col-md-4">
                        <form >
                            <Input type="text" placeholder="Buscar por id" className="caixa-busca txtBusca" onChange={handleChangeId} />
                        </form>
                        <div className="dados-clientes">
                            <Cliente cliente={clienteId}></Cliente>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <form>
                            <h3>Dados Pessoais</h3>
                            <fieldset>
                                <div className="form-group">
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome do cliente</label>
                                    <input type="text" className="nome form-control" id="nome" onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text" className="usuario form-control" id="usuario" onChange={e => setUser(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text" placeholder="000.000.000.00" className="cpf form-control" id="cpf" onChange={e => setCpf(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                        <input type="email" placeholder="email@example.com" className="emai form-control" id="email" onChange={e => setMail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dataNascimento">Data de nascimento</label>
                                    <input type="text" placeholder="dd/mm/aaaa" className="dataNascimento form-control" id="dataNascimento" onChange={e => setBirthday(e.target.value)} />
                                </div>
                                <h3>Endereço</h3>
                                <div className="form-group">
                                    <label htmlFor="rua">Rua</label>
                                    <input type="text" className="rua form-control" id="rua" onChange={e => setStreet(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="numero">Número</label>
                                    <input type="text" className="numero form-control" id="numero" onChange={e => setNumber(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complemento">Complemento</label>
                                    <input type="text" className="complemento form-control" id="complemento" onChange={e => setComplement(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input type="text" className="bairro form-control" id="bairro" onChange={e => setDistrict(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" className="cidade form-control" id="cidade" onChange={e => setCity(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" className="estado form-control" id="estado" onChange={e => setState(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cep">Cep</label>
                                    <input type="text" className="cep form-control" id="cep" onChange={e => setZoneCode(e.target.value)} />
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