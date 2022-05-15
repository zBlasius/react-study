import React from 'react'
import '../produtos/ListaProdutos.css';
import Alunos from './alunos'
import If from './If';

export default props => {

    const ListaAlunos = 
        Alunos.map(alunos=>{
            return(
                   <tr key={alunos.id}>
                       <td > {alunos.id}) </td>
                       <td> {alunos.nome} </td>
                       <td> {alunos.nota}  </td>
                       <td>  
                            <If teste={alunos.nota < 7}>
                                Recuperação
                            </If>

                            <If teste={alunos.nota > 7} >
                                Passou
                            </If>
                       </td>
                   </tr>

            );
        })

        return(

                <table className="produtos" >
                    <thead>
                        <tr>
                            <th> ID </th>
                            <th> Nome</th>
                            <th> Nota</th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListaAlunos}
                    </tbody>
                </table>

        );
}