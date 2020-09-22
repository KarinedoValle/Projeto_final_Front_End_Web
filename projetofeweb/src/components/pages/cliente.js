import React from 'react'
import '../../App.css'

function Cliente({ id, nome, usuario, cpf, email, dataNascimento, rua, numero, complemento, bairro, cidade, estado, cep }) {

    return (
        <>
            <div>
                <div className="dados-clientes">
                        <div className="cliente-dados-pessoais">
                            <legend>Dados do cliente</legend>
                    <table className = "tabela table table-striped">
                            <thead>
                            <tr>
                                <td>Id</td>
                                <td>{id}</td>
                            </tr>
                            </thead>
                            <tbody>
                             <tr>
                                 <td>Nome</td>
                                <td>{nome}</td>
                            </tr>
                            <tr>
                                <td>Usuário</td>
                                <td>{usuario}</td>
                            </tr>
                            <tr>
                                <td>CPF</td>
                                <td>{cpf}</td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td>Data de nascimento</td>
                                <td>{dataNascimento}</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                        <div className="cliente-endereco">
                        <table className = "tabela table table-striped">
                            <thead>
                            <tr>
                                <td>Endereço:</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Rua</td>
                                 <td>{rua}</td>
                            </tr>
                            <tr>
                                <td>Número</td>
                                 <td>{numero}</td>
                            </tr>
                            <tr>
                                <td>Complemento</td>
                                 <td>{complemento}</td>
                            </tr>
                            <tr>
                                <td>Bairro</td>
                                 <td>{bairro}</td>
                            </tr>
                            <tr>
                                <td>Cidade</td>
                                 <td>{cidade}</td>
                            </tr>
                            <tr>
                                <td>Estado</td>
                                 <td>{estado}</td>
                            </tr>
                            <tr>
                                <td>CEP</td>
                                 <td>{cep}</td>
                            </tr>
                        </tbody>
                    </table>
                        </div>
                        
                </div>
            </div>
        </>
    )
}

export default Cliente