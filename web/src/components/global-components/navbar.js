import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react'
import { api } from '../../services/api';
export default function Navbar() {
	const { user, handleLogout } = useAuth()
	const [favorites, setFavorites] = useState([])
	const [loading, setLoading] = useState(false)
	const history = useHistory()
	useEffect(() => {
		if (user !== null) {
			api.get(`/user_favorites/${user.id}`).then((response) => {
				setFavorites(response.data)
				setLoading(true)
			})
		}
	}, [])
	return (
		<div>
			<header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
				<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="site-logo-wrap">
									<div className="site-logo go-top">
										<Link to="/"><img src={"https://imgur.com/VKAuLWj.jpg"} alt="Logo" /></Link>
									</div>
									<div className="get-support clearfix d-none">
										<div className="get-support-icon">
											<i className="icon-call" />
										</div>
										<div className="get-support-info">
											<h6>Get Support</h6>
											<h4><a href="tel:+123456789">123-456-789-10</a></h4>
										</div>
									</div>
								</div>
							</div>
							<div className="col header-menu-column">
								<div className="header-menu d-none d-xl-block">
									<nav>
										<div className="ltn__main-menu go-top">
											<ul>
												<li className="menu-icon"><Link to="/">Home</Link>
												</li>
												<li className="menu-icon"><Link to="/imoveis">Imóveis</Link>
												</li>
												<li className="menu-icon"><Link to="/about">Sobre</Link>
												</li>
												<li><Link to="/contact">Contatos</Link></li>
											</ul>
										</div>
									</nav>
								</div>
							</div>
							<div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
								<div>
									<button onClick={() => history.push("/cadastrar-imovel")} className='ltn__secondary-bg text-white rounded pt-10 pb-10'>
										Anunciar
									</button>
								</div>
								<div className="ltn__drop-menu user-menu">
									<ul>
										<li>
											<Link to="#"><i className="icon-user" /></Link>
											<ul className="go-top">
												{user === null ? <li><Link to="/login">Entrar</Link></li> : null}
												{user === null ? <li><Link to="/register">Cadastrar</Link></li> : null}
												{user ? <li><Link to="/my-account">Minha conta</Link></li> : null}
												{user ? <li><Link onClick={handleLogout} >Sair</Link></li> : null}
											</ul>
										</li>
									</ul>
								</div>
								{/* mini-cart */}
								<div className="mini-cart-icon">
									<a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
										<i className="flaticon-heart-1"></i>
									</a>
								</div>
								{/* mini-cart */}
								{/* Mobile Menu Button */}
								<div className="mobile-menu-toggle d-xl-none">
									<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
										<svg viewBox="0 0 800 600">
											<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
											<path d="M300,320 L540,320" id="middle" />
											<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* Utilize Cart Menu Start */}
			<div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
						<span className="ltn__utilize-menu-title">Favoritos</span>
						<button className="ltn__utilize-close">×</button>
					</div>
					<div className="mini-cart-product-area ltn__scrollbar">
						{loading ? favorites.map((item) => {
							return (
								<div className="mini-cart-item clearfix">
									<div className="mini-cart-img go-top">
										<Link to="/product-details"><img src={item.ad_image} alt="Imagem principal de anuncio" /></Link>
										<span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
									</div>
									<div className="mini-cart-info go-top">
										<h6><Link to="/product-details">{item.ad_title}</Link></h6>
										<span className="mini-cart-quantity">{item.ad_value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
									</div>

								</div>
							)
						}) : null}

					</div>

				</div>
			</div>
		</div>
	)
}