import React from 'react';

class ContactoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            mensaje: ''
        };
        this.submitted = this.submitted.bind(this);
        this.changedName = this.changedName.bind(this);
        this.changedMessage = this.changedMessage.bind(this);
    }


    submitted(event) {
        alert('Nombre: ' + this.state.nombre + ' Mensaje: ' + this.state.mensaje);
        event.preventDefault();
    }

    changedName(event) {
        this.setState({
            nombre: event.target.value,
        })
    }

    changedMessage(event) {
        this.setState({
            mensaje: event.target.value
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='my-5'>
                        <h2>Contacto</h2>
                        <form onSubmit={this.submitted}>
                            <div className='form-group'>
                                <label>Nombre</label>
                                <input type='text' className='form-control' onChange={this.changedName} />
                            </div>
                            <div className='form-group'>
                                <label>Mensaje</label>
                                <textarea className='form-control' onChange={this.changedMessage}></textarea>
                            </div>
                            <input type='submit' className='btn btn-primary mt-3' />
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default ContactoPage;