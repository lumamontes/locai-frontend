import React, { Component } from 'react';
import Lottie from "lottie-react"
import ideaAnimation from "../../assets/73503-creative-team.json";

class AboutV4 extends Component {

	render() {
		return <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
						<div className="about-us-img-wrap about-img-left">
								<Lottie
									animationData={ideaAnimation}
									loop={true}
								/>						
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
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default AboutV4