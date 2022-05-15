import React , {useContext} from 'react'

export const data ={
    number: 123,
    text: 'Context API...'
}

const DataContext = React.createContext(data)

export default DataContext
// O contexto, é para quando se faz necessário a comunicação de dois componentes muito distantes.
// ou seja, para não envolver muitos outros componentes indiretamentes, é feito um COntext central para a comunicação direta

// é interessante que esse componente seja chamado na parte mais alta da minha aplicação, como o app.js ou index.js