import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Error extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__404-area ltn__404-area-1 mb-120">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="error-404-inner text-center">
						<div className="error-img mb-30">
						<img src={publicUrl+"assets/img/others/error-1.png"} alt="#" />
						</div>
						<h1 className="error-404-title d-none">404</h1>
						<h2>Página não encontrada!</h2>
						<p>Opa! Parece que a página que você tentou acessar não existe.</p>
						<div className="btn-wrapper go-top">
						<Link to="/" className="btn btn-transparent"><i className="fas fa-long-arrow-alt-left" /> Voltar </Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default Error