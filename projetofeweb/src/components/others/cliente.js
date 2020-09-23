import React, {useState, useEffect} from 'react'
import '../../css/App.css'

function Cliente(props) {
  const [clienteId, setClienteId] = useState({})
  

  useEffect(() => {
      setClienteId(props.cliente) 
  }, [props.cliente])

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
                                    <td>{clienteId.id}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nome</td>
                                    <td>{clienteId.nome}</td>
                                </tr>
                                <tr>
                                    <td>Usuário</td>
                                    <td>{clienteId.usuario}</td>
                                </tr>
                                <tr>
                                    <td>CPF</td>
                                    <td>{clienteId.cpf}</td>
                                </tr>
                                <tr>
                                    <td>E-mail</td>
                                    <td>{clienteId.email}</td>
                                </tr>
                                <tr>
                                    <td>Data de nascimento</td>
                                    <td>{clienteId.dataNascimento}</td>
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
                                    <td>{clienteId.endereco && clienteId.endereco.rua}</td>
                                </tr>
                                <tr>
                                    <td>Número</td>
                                    <td>{clienteId.endereco && clienteId.endereco.numero}</td>
                                </tr>
                                <tr>
                                    <td>Complemento</td>
                                    <td>{clienteId.endereco && clienteId.endereco.complemento}</td>
                                </tr>
                                <tr>
                                    <td>Bairro</td>
                                    <td>{clienteId.endereco && clienteId.endereco.bairro}</td>
                                </tr>
                                <tr>
                                    <td>Cidade</td>
                                    <td>{clienteId.endereco && clienteId.endereco.cidade}</td>
                                </tr>
                                <tr>
                                    <td>Estado</td>
                                    <td>{clienteId.endereco && clienteId.endereco.estado}</td>
                                </tr>
                                <tr>
                                    <td>CEP</td>
                                    <td>{clienteId.endereco && clienteId.endereco.cep}</td>
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