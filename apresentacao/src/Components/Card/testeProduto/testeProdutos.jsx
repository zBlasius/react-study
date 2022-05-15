import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './teste.css'

import Produto from './listaTeste/ListaTeste'

class App extends React.Component {
    constructor(props){
        super(props);

        const id = props.id
        const product = []
        var qtd = []
        var valor = []

        switch(id){
            case 1 :
                product[0] = props.produto
            break;
            case 2 :
                product[1] = props.produto
            break;
            case 3 : 
                product[2] = props.produto
            break;
            case 4 : 
                product[3] = props.produto
            break;
            case 5 : 
                product[4] = props.produto
            break;
            case 6 : 
                product[5] = props.produto
            break;
            case 7 : 
                product[6] = props.produto
            break;
            case 8 : 
                product[7] = props.produto
            break;
            case 9 : 
                product[8] = props.produto
            break;
            case 10 : 
                product[9] = props.produto
            break;

        }
        
        this.state = { 
    
                produtos:[
                     {id:1 ,  produto:product[0] , quantidade01:props.quantidade , valor01:props.valor},
                     {id:2,   produto:product[1] , quantidade02:30 , valor02:20.00},
                     {id:3,   produto:product[2] , quantidade03:50 , valor03:25.00},
                     {id:4,   produto:product[3] , quantidade04:3 , valor04:95.76},
                     {id:5,   produto:product[4] , quantidade05:8 , valor05:53.2},
                     {id:6,   produto:product[5] , quantidade06:9 , valor06:80.00},
                     {id:7,   produto:product[6] , quantidade07:11 , valor07:75.50},
                     {id:8,   produto:product[7] , quantidade08:6 , valor08:239.90},
                     {id:9,   produto:product[8] , quantidade09: 0 , valor09:1599.90},
                     {id:10,  produto:product[9] , quantidade10:4 , valor10:50.95}
                    ]
                };   
            } 
             
    render(){
        return(
            <div>
                <Produto teste={this.state.produtos} />
            </div>
            ); 
        }     
    }
export default App
