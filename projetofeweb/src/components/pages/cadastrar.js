import React, { useState, useEffect } from 'react'
import '../../bootstrap/css/bootstrap.css'
import '../../bootstrap/css/bootstrap-grid.css'
import '../../App.css'
import { Button2 } from '../others/Button2'
import api from '../../services/api'

export default function Cadastrar() {
    const [cliente, setCliente] = useState({})
    const [vnome, setVnome] = useState('')
    const [vusuario, setVusuario] = useState('')
    const [vcpf, setVcpf] = useState('')
    const [vemail, setVemail] = useState('')
    const [vnascimento, setVnascimento] = useState('')
    const [vrua, setVrua] = useState('')
    const [vnumero, setVnumero] = useState('')
    const [vcomplemento, setVcomplemento] = useState('')
    const [vbairro, setVbairro] = useState('')
    const [vcidade, setVcidade] = useState('')
    const [vestado, setVestado] = useState('')
    const [vcep, setVcep] = useState('')


    const handleNome = (e) => {
        setVnome(e.target.value);
    }
    const handleUsuario = (e) => {
        setVusuario(e.target.value);
    }
    const handleCpf = (e) => {
        setVcpf(e.target.value);
    }
    const handleEmail = (e) => {
        setVemail(e.target.value);
    }
    const handleNascimento = (e) => {
        setVnascimento(e.target.value);
    }
    const handleRua = (e) => {
        setVrua(e.target.value);
    }
    const handleNumero = (e) => {
        setVnumero(e.target.value);
    }
    const handleComplemento = (e) => {
        setVcomplemento(e.target.value);
    }
    const handleBairro = (e) => {
        setVbairro(e.target.value);
    }
    const handleCidade = (e) => {
        setVcidade(e.target.value);
    }
    const handleEstado = (e) => {
        setVestado(e.target.value);
    }
    const handleCep = (e) => {
        setVcep(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        var cliente = {
            nome: vnome,
            usuario: vusuario,
            cpf: vcpf,
            email: vemail,
            dataNascimento: vnascimento,
            endereco: {
                rua: vrua,
                numero: vnumero,
                complemento: vcomplemento,
                bairro: vbairro,
                cidade: vcidade,
                estado: vestado,
                cep: vcep
            }
        }
        setCliente(cliente)
        console.log(cliente)
        // api.post('/cliente', cliente).then(res => console.log(res)).catch(erro => console.log(erro))
    }

    useEffect(() => {
        api.post('/cliente', cliente).then(response => {
            console.log(response.data)
        }).catch(erro => console.log(erro))
    }, [cliente])

    return (

        <>
            <h1 className="cadastrar">Cadastrar</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form>
                            <h3>Dados Pessoais</h3>
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome do cliente</label>
                                    <input type="text" required={true} className="nome form-control" id="nome" autoFocus onChange={handleNome} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text" required={true} className="usuario form-control" id="usuario" onChange={handleUsuario} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text" required={true} placeholder="000.000.000.00" className="cpf form-control" id="cpf" onChange={handleCpf} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                        <input type="email" required={true} placeholder="email@example.com" className="emai form-control" id="email" onChange={handleEmail} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dataNascimento">Data de nascimento</label>
                                    <input type="text" required={true} placeholder="AAAA-MM-DD" className="dataNascimento form-control" id="dataNascimento" onChange={handleNascimento} />
                                </div>
                                <h3>Endereço</h3>
                                <div className="form-group">
                                    <label htmlFor="rua">Rua</label>
                                    <input type="text" required={true} className="rua form-control" id="rua" onChange={handleRua} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="numero">Número</label>
                                    <input type="text" required={true} className="numero form-control" id="numero" onChange={handleNumero} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complemento">Complemento</label>
                                    <input type="text" className="complemento form-control" id="complemento" onChange={handleComplemento} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input type="text" required={true} className="bairro form-control" id="bairro" onChange={handleBairro} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" required={true} className="cidade form-control" id="cidade" onChange={handleCidade} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" required={true} className="estado form-control" id="estado" onChange={handleEstado} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cep">Cep</label>
                                    <input type="text" required={true} className="cep form-control" id="cep" onChange={handleCep} />
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