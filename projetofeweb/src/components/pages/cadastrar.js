import React, { useState, useEffect} from 'react'
import { format, parseISO } from 'date-fns'
import '../../css/bootstrap/css/bootstrap.css'
import '../../css/bootstrap/css/bootstrap-grid.css'
import '../../css/App.css'
import { Button2 } from '../others/Button2'
import {Title} from '../styles/CadastrarStyles'
import api from '../../services/api'

export default function Cadastrar() {
    const [cliente, setCliente] = useState('')
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

    const handleSubmit = () => {
    //Formatando a data
       birthday = birthday.substr(0,10).split('/').reverse().join('-')
        //inserir como string
        birthday = birthday.concat("T00:00:00Z")

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
        if(cliente !== ''){
            api.post('/cliente', cliente).then(response => {
                alert("Cliente cadastrado!")
            }).catch(erro => {
                console.log(erro)
                alert("Erro ao cadastrar cliente!")
                })

        }
    }, [cliente])
    
    return (

        <>
            <Title>Cadastrar</Title>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form>
                            <h3>Dados Pessoais</h3>
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome do cliente</label>
                                    <input type="text" required={true} className="nome form-control" id="nome" autoFocus onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text" required={true} className="usuario form-control" id="usuario" onChange={e => setUser(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpf">CPF</label>
                                    <p>(Somente números)</p>
                                    <input type="text" pattern="[0-9]+$" required={true} className="cpf form-control" id="cpf" onChange={e => setCpf(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                        <input type="email" required={true}  placeholder="email@example.com" className="emai form-control" id="email" onChange={e => setMail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dataNascimento">Data de nascimento</label>
                                    <input type="text" required={true} placeholder="dd/mm/aaaa" maxLength="10" pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" className="dataNascimento form-control" id="dataNascimento" onChange={e => setBirthday(e.target.value)} />
                                </div>
                                <h3>Endereço</h3>
                                <div className="form-group">
                                    <label htmlFor="rua">Rua</label>
                                    <input type="text" placeholder="Mínimo de 3 caracteres" minLength='3' required={true} className="rua form-control" id="rua" onChange={e => setStreet(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="numero">Número</label>
                                    <input type="text" required={true} className="numero form-control" id="numero" onChange={e => setNumber(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complemento">Complemento</label>
                                    <input type="text" className="complemento form-control" id="complemento" onChange={e => setComplement(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input type="text" required={true} className="bairro form-control" id="bairro" onChange={e => setDistrict(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" required={true}  className="cidade form-control" id="cidade" onChange={e => setCity(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" placeholder="Sigla" pattern="[a-z\s]+$" minLength='2' maxLength='2' required={true} className="estado form-control" id="estado" onChange={e => setState(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cep">Cep</label>
                                    <p>(Somente números)</p>
                                    <input type="text" pattern="[0-9]+$" required={true} className="cep form-control" id="cep" onChange={e => setZoneCode(e.target.value)} />
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