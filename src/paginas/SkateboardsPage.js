import React from 'react';
import Skate from '../componentes/Skate';

class SkateboardsPage extends React.Component {
    render() {
        return (
            <div>
                <Skate
                    nombre='Tabla skate Toy Machine: 8.5" Monster'
                    img='/img/tablas/toy-machine-8.5.jpg'
                    descripcion='Medida: 8.5" (pulgadas) Concavo: Medio Tecnología: 7 láminas de Arce Canadiense Lija Bullet incluida con la tabla de skate.' />

                <Skate
                    nombre='Tabla skate Creature: 8.5" Logo Outline Stumps'
                    img='/img/tablas/creature-8.5.jpg'
                    descripcion='Medidas y características en la descripción. Lija Jessup Negra incluida con la tabla de skate como regalo de nuestra tienda de skate.' />

                <Skate
                    nombre='Tabla skate Santa Cruz 8.25" Knibbs Paralysis Pro'
                    img='/img/tablas/santa-cruz-8.25.jpg'
                    descripcion='Compar tabla Skate Santa Cruz de 8.25" Medidas y características en la descripción. Lija Jessup Negra incluida con la tabla de skate como regalo de nuestra tienda de skate. COMPRA Un trozo de lija para el logo superior en este enlace: LIJA TRANSPARENTE TROZO PEQUEÑO' />

                <Skate
                    nombre='Tabla skate Powell Peralta: 8.25" Cab Faction'
                    img='/img/tablas/powell-peralta-8.25.jpg'
                    descripcion='Medidas y características en la descripción. Lija Jessup Negra incluida con la tabla de skate como regalo de nuestra tienda de skate.' />
            </div>
        )
    };
}

export default SkateboardsPage;