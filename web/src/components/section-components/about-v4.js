import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
						<div className="about-us-img-wrap about-img-left">
							<img src={publicUrl + "assets/img/others/13.png"} alt="Sobre nós Image" />
						</div>
					</div>
					<div className="col-lg-6 align-self-center">
						<div className="about-us-info-wrap">
							<div className="section-title-area ltn__section-title-2--- mb-20">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Sobre nós</h6>
								<h1 className="section-title">Sua nova solução<span>.</span></h1>
								<p>Sistema desenvolvido como requisito básico para obtenção de grau no Curso de Tecnólogo em Sistemas para Internet na Faculdade Meta.
								</p>
								<p>Seu objetivo é auxiliar na área de aluguel de imóveis, com uma interface simples e que torne o processo de aluguel e anúncio de imóveis mais ágil e fácil, otimizando a conexão entre as partes interessadas e proporcionando uma melhor experiência para o usuário. Planejando, assim, descomplicar os processos burocráticos do inquilino e do locatário no estado do Amapá. </p>
							</div>
							{/* <div className="ltn__callout bg-overlay-theme-05  mt-30">
								<p>"Enimad minim veniam quis nostrud exercitation <br />
									llamco laboris. Lorem ipsum dolor sit amet" </p>
							</div> */}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default AboutV4