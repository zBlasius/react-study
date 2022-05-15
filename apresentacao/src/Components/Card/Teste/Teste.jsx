import React from 'react'
import './Teste.css'
 

export default props => {

    return(
        <div className="Body"> 
            <h2> Tabela usuário </h2>
            <table>
                <tr>
                    <th> Idade </th>
                    <th> Nome </th>
                    <th> Sexo </th>
                    <th> Registrado </th>
                </tr>
                <tr> 
                    <td> {props.idade} </td>
                    <td> {props.nome}  </td>
                    <td> {props.sexo}  </td>
                    <td> {(props.registrado === true ? 'Sim' : 'Não')} </td>
                </tr>
            </table>
        </div>
    );
}