import React from 'react';

class ApiPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            respuestasApi: [],
            pagina: 1
        }
        this.paginaSiguiente = this.paginaSiguiente.bind(this);
        this.paginaAnterior = this.paginaAnterior.bind(this);
    }

    paginaAnterior = () => {
        let pagina = this.state.pagina
        if (pagina === 1) return null;
        pagina--;
        this.setState({ pagina }, () => { this.componentDidMount() });
    }

    paginaSiguiente = () => {
        let pagina = this.state.pagina
        pagina++;
        this.setState({ pagina }, () => { this.componentDidMount() });
    }

    componentDidMount() {
        let pagina = this.state.pagina
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    respuestasApi: result.results
                });
            })
    }

    render() {
        return (
            <div className='container'>
                <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
                    {this.state.respuestasApi.map((respuesta) => (
                        <p className='fs-5 fw-bold mb-4 text-center'>{respuesta.name} {<img className='card mx-auto img-fluid' src={respuesta.image} alt={respuesta.name} />}</p>
                    ))}
                </div>
                <div className='row'>
                    <div className='col-sm-6 text-center mb-2'>
                        <button onClick={this.paginaAnterior} type='button' className='btn btn-dark fw-bolder fs-5'>Anterior</button>
                    </div>
                    <div className='col-sm-6 text-center'>
                        <button onClick={this.paginaSiguiente} type='button' className='btn btn-dark fw-bolder fs-5'>Siguiente</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default ApiPage;