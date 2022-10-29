import React from 'react';
import Ropa from '../componentes/Ropa';

class RopaPage extends React.Component {
    render() {
        return (
            <div>
                <Ropa
                nombre='Thrasher Sudadera: Rainbow'
                img='/img/ropa/thrasher-sudadera-rainbow.jpg'
                descripcion='Thrasher Sudadera manga larga: Negra'/>
                  <Ropa
                nombre='Camiseta Thrasher: Gonz Sad'
                img='/img/ropa/camiseta-thrasher-gonz-sad.jpg'
                descripcion='Thrasher Camiseta - Anaranjada'/>
                  <Ropa
                nombre='Zapatillas de skate Etnies Barge LS '
                img='/img/ropa/zapatillas-skate-etnies-barge-ls-gris.jpg'
                descripcion='DARK GREY/BLACK/GUM'/>
            </div>
        )
    };
}

export default RopaPage;