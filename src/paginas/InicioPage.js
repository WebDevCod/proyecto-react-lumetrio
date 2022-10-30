import React from 'react';
import videoBg from '../video/videoBg.mp4';

class InicioPage extends React.Component {

    render() {
        return (
            <div className='main'>
                <video src={videoBg} autoPlay loop muted />
            </div>
        )
    };
}

export default InicioPage;