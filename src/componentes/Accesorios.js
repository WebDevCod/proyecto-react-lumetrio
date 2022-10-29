import React from 'react';

class Accesorios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: false
        }
        this.mostrarDescripcion = this.mostrarDescripcion.bind(this);
        this.ocultarDescripcion = this.ocultarDescripcion.bind(this);
    }

    mostrarDescripcion() {
        this.setState((cambioEstado) => ({
            descripcion: !cambioEstado.descripcion
        }))
    }

    ocultarDescripcion() {
        this.setState((cambioEstado) => ({
            descripcion: !cambioEstado.descripcion
        }))
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div>
                            <img src={this.props.img} alt={this.props.nombre} className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 my-auto'>
                        <h2>{this.props.nombre}</h2>
                        <p className={(this.state.descripcion ? '' : 'd-none')}>{this.props.descripcion}</p>
                        <div className={(this.state.descripcion ? 'd-none' : '')}>
                            <button className='btn btn-danger mb-5' onClick={this.mostrarDescripcion}>Mostrar descripción</button>
                        </div>
                        <div className={(this.state.descripcion ? '' : 'd-none')}>
                            <button className='btn btn-danger mb-5' onClick={this.ocultarDescripcion}>Ocultar descripción</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Accesorios;