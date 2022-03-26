import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
export default function Login () {
	const history = useHistory();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {handleLogin, user} = useAuth()

	async function login() {
		const response = await api.post('/login', {
			email:email,
			password:password
		});
		await handleLogin(response.data);
		history.push('my-account')
	}
	return (
		<div>
			 <div className="ltn__login-area pb-65">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area text-center">
						<h1 className="section-title">Entrar <br />Na sua conta</h1>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
					<div className="account-login-inner">
						<form  onSubmit={(e) => e.preventDefault()} className="ltn__form-box contact-form-box">
						<input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email*" />
						<input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Senha *" />
						<div className="btn-wrapper mt-0">
							<button className="theme-btn-1 btn btn-block" onClick={login}>Entrar</button>
						</div>
						<div className="go-to-btn mt-20">
						<a href="#" title="Forgot Password?" data-bs-toggle="modal" data-bs-target="#ltn_forget_password_modal"><small>FORGOTTEN YOUR PASSWORD?</small></a>
						</div>
						</form>
					</div>
					</div>
					<div className="col-lg-6">
					<div className="account-create text-center pt-50">
						<h4>Não tem uma conta?</h4>
						<p>Adicione itens à sua lista de desejos receba recomendações personalizadas
confira mais rapidamente acompanhe seus pedidos cadastre-se</p>
						<div className="btn-wrapper go-top">
							<Link to="/register" className="theme-btn-1 btn black-btn">CRIAR CONTA</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
						</div>
			<div className="ltn__modal-area ltn__add-to-cart-modal-area----">
			<div className="modal fade" id="ltn_forget_password_modal" tabIndex={-1}>
				<div className="modal-dialog modal-md" role="document">
				<div className="modal-content">
					<div className="modal-header">
					<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
					</div>
					<div className="modal-body">
					<div className="ltn__quick-view-modal-inner">
						<div className="modal-product-item">
						<div className="row">
							<div className="col-12">
							<div className="modal-product-info text-center">
								<h4>FORGET PASSWORD?</h4>
								<p className="added-cart"> Enter you register email.</p>
								<form action="#" className="ltn__form-box">
								<input type="text" name="email" placeholder="Type your register email*" />
								<div className="btn-wrapper mt-0">
									<button className="theme-btn-1 btn btn-full-width-2" type="submit">Submit</button>
								</div>
								</form>
							</div>
							{/* additional-info */}
							<div className="additional-info d-none">
								<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
								<div className="payment-method">
								<img src={"assets/img/icons/payment.png"} alt="#" />
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>

			</div>
	)
}