import React from 'react';
import './lista.css';
import Teste from '../testeProdutos';

export default props=>{ // Pegar lista de produtos de state e passar via props
    const ProdutosLi= 
        props.teste.map((produto, id, product, qtd)=>{

            return (
                    <tr key={produto.id} className={id % 2 === 0 ? '' : 'Impar'}>
                        <td> {produto.id} </td>
                        <td> {produto.produto} </td>
                        <td className={produto.quantidade == 0 ? 'Indis' : ''}> {produto.quantidade} </td>
                        <td style={{backgroundColor:'rgba(0, 255, 13, 0.205)'}}> R$ {produto.valor} </td>
                    </tr>
            );


        }); 

        return (

            <table className="produtos" >
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> PRODUTO </th>
                        <th> QUANTIDADE </th>
                        <th> VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    {ProdutosLi} 
                </tbody>
            </table>
        );
} 