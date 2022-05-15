import React from 'react'
import './Card.css'

import Teste from './Teste/Teste.jsx'
import ListaProdutos from './produtos/ListaProdutos'
import Contador from './Contador/Contador'
import Desafio from './desafio/Desafio'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            id: {id: 1},
            produtos:[
                {id:1,   produto:'Chuteira' , quantidade:12 , valor:20}, // há um bug nesse código: Não deve ser feito com base na posição do array
                {id:2,   produto:'Meiao' , quantidade:30 , valor:20.00},
                {id:3,   produto:'Calção' , quantidade:50 , valor:0},
                {id:4,   produto:'Bola Nike' , quantidade:2 , valor:95.76},
                {id:22,   produto:'Camisa Términca' , quantidade:8 , valor:2},
                {id:6,   produto:'Camisa' , quantidade:2 , valor:80.00},
                {id:7,   produto:'Luva' , quantidade:11 , valor:75.50},
                {id:8,   produto:'Camisa Valencia' , quantidade:6 , valor:239.90},
                {id:9,   produto:'Camisa São Paulo' , quantidade: 2 , valor:1599.90},
                {id:10,  produto:'Bolsa Esporte' , quantidade:4 , valor:50.95}
                ]
            }
        } 

    Produto(prod){
        var arrayFilter = []
        arrayFilter = this.state.produtos
        arrayFilter[this.state.id].produto = prod
        return(
            this.setState(arrayFilter)
        )
    }

    Quantidade(qtd){
        var arrayFilter = []
        arrayFilter = this.state.produtos
        arrayFilter[this.state.id].quantidade = qtd 
        return(
            this.setState(arrayFilter)
        )
    }

    Valor(value){
        var arrayFilter = []
        arrayFilter = this.state.produtos
        arrayFilter[this.state.id].valor = value
        return(
            this.setState(arrayFilter)
        )
    }
             
    render(){
        return(
            <div>
                <Teste idade="20" nome="GUstavo" sexo="g" registrado={false}/>
                <Contador/>
                <ListaProdutos teste={this.state.produtos}/>
                <Desafio/>
                

                <div className="Input">
                    <label>
                        Id:<input type="number" onChange={e=> this.Id(e.target.value)} max='10' min='1' />
                    </label>

                    <label>
                        Produto:<input type="text" onChange={e=> this.Produto(e.target.value)}/>
                    </label>

                    <label>
                        Quantidade:<input type="number" onChange={e=> this.Quantidade(e.target.value)}/>
                    </label>

                    <label>
                        Valor:<input type="number" onChange={e=> this.Valor(e.target.value)}/>
                    </label>
                </div>
            </div>
            ); 
        }     
    }
export default App
