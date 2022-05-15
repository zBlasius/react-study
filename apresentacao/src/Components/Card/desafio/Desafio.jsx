import React, {useState} from 'react'
import "./estilo.css"
import Input from './Input.jsx'
import Select from './Select'

export default props =>{
   const [atributos, setAtributos ] = useState([ 
        {isCheck: false , value:0}, 
        {isCheck: false , value:1}, 
        {isCheck: false , value:2}, 
        {isCheck: false , value:3}, 
        {isCheck: false , value:4},
        {isCheck: false , value:5},
        {isCheck: false , value:6},
        {isCheck: false , value:7}
    ])

    function Check(elemento){
        let newCheckBox = [...atributos]
        const index = newCheckBox.indexOf(elemento)
        newCheckBox[index].isCheck = !newCheckBox[index].isCheck
        setAtributos(newCheckBox)
    }

    function Verify(value) {
        return value.isCheck == true
    }



    var Filter = atributos.filter(Verify)
    console.log(Filter)

    const InputsLi =
    atributos.map((checkBox,i)=>{
        return(
            <div>
                {checkBox.value + 1} <input type="checkbox" checked={atributos.isCheck}  onChange={()=> Check(checkBox)} />
            </div>
        );
    })  // considerar operador spread para pegar determinados values..

    return(
    <div>

        <div className="Main">
            <select className="Empresas">
                <optgroup label="Selecione sua empresa !">
                    <option id="Xuxa" label="Xuxa (3)" ></option>
                    <option id="Pele" label="Pele (5)" ></option> 
                    <option id="Coutinho" label="Coutinho (8)" ></option>
                </optgroup>
            </select>
            <h4> Imagens de reconhecimento bocal </h4>
        </div>

    
        <div className="Checkbox">
            <div>
                {InputsLi}
            </div>
            <input type="button"  className="buttonSub" id="botao" value="Submit !"/>
        </div>

   </div>
    );
}
