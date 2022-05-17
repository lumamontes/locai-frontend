import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import TeamCard from '../section-components/team-card';

export default function TeamV1() {
	let agents = [

		{
			"url_image": 'https://avatars.githubusercontent.com/u/65730229?v=4',
			"alt": 'Imagem de equipe',
			"name": "Alessandro Rodrigues",
			"position": "Desenvolvedor",
			"github": "https://github.com/alessandrordgs",
			"instagram": "",
			"linkedin": "",
		},
		{
			"url_image": '',
			"alt": 'Imagem de equipe',
			"name": "Gabriela Pantoja",
			"position": "Product Manager",
			"github": "",
			"instagram": "",
			"linkedin": "",
		},
		{
			"url_image": 'https://avatars.githubusercontent.com/u/60052718?v=4',
			"alt": 'Imagem de equipe',
			"name": "Luma Montes",
			"position": "Desenvolvedora",
			"github": "https://github.com/lumamontes",
			"instagram": "",
			"linkedin": "",
		}
	]
	return (
		<div className="ltn__team-area pt-115 pb-90 go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Conheça a equipe</h6>
							<h1 className="section-title">Time</h1>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					{
						agents.map(agent => (
							<TeamCard name={agent.name} url_image={agent.url_image} alt={agent.alt} position={agent.position} github={agent.github}/>
						))
					}
				</div>
			</div>
		</div>
	)
}
