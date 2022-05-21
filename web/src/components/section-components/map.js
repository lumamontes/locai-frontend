import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.273277397542!2d-51.0765539!3d0.0012788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x707ce82298e519f8!2sFaculdade%20META!5e0!3m2!1spt-BR!2sbr!4v1653176594021!5m2!1spt-BR!2sbr" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map