import React from 'react';
import Accesorios from '../componentes/Accesorios';

class AccesoriosPage extends React.Component {
    render() {
        return(
            <div>
                <Accesorios 
                nombre='Gorro Etnies: Warehouse Beanie, tobacco'
                img='/img/accesorios/gorro-etnies.jpg'
                descripcion='Gorro Etnies, color tobacco. Talle único.'/>
                  <Accesorios 
                nombre='Herramienta skate Independent: Negro'
                img='/img/accesorios/herramienta-independent.jpg'
                descripcion='Herramienta para montaje de skate. Esta llave tiene forma de T y es ideal para ajustar los tres tipos de tuercas del monopatín. 
                Incluye un destornillador en allen y estrella'/>
                  <Accesorios 
                nombre='Lija skate Mob Griptape: 10" Negro'
                img='/img/accesorios/lija-mob.jpg'
                descripcion='La lija Mob Grip es una de las mejores lijas de skate y utilizadas por skaters como Chris Haslam, Chris Cole, Nyjah Huston
                Ancho: 10 "                
                Largo: 33 "                
                Tiene perforaciones muy pequeñas lo que hace que no salgan burbujas'/>
            </div>
        )
    };
}

export default AccesoriosPage;